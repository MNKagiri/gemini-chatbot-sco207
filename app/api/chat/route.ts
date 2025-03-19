import {openai} from "@ai-sdk/openai"
import { google } from "@ai-sdk/google";
import {streamText, tool} from 'ai';
import {z} from "zod";

// allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request){
    console.log('found')
    const {messages} = await req.json();
    console.log(messages)

    const result = streamText({
        model: google('gemini-1.5-flash'),
        messages,
        tools: {
            weather:tool({
                description: 'Get the weather in a location (fahrenheit)',
                parameters: z.object({
                    location: z.string().describe('The location to get the weather for'),
                }),
                execute: async({location}) => {
                    const temperature = Math.round(Math.random() * (90 -32) + 32);
                    return {location, 
                        temperature,};
                },
            }),
        },
    });

    return result.toDataStreamResponse();
}