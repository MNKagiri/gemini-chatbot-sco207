/* import {openai} from "@ai-sdk/openai"
import { google } from "@ai-sdk/google";
import {streamText, tool} from 'ai';
import {z} from "zod";

import type { NextApiRequest, NextApiResponse } from "next";


// allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request){
    console.log('found')
    const {messages} = await req.json();

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

/* 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    
    try {
        const { messages } = req.body;
        
        const result = streamText({
            model: google('gemini-1.5-flash'),
            messages,
            tools: {
                weather: tool({
                    description: 'Get the weather in a location (Fahrenheit)',
                    parameters: z.object({
                        location: z.string().describe('The location to get the weather for'),
                    }),
                    execute: async ({ location }) => {
                        const temperature = Math.round(Math.random() * (90 - 32) + 32);
                        return { location, temperature };
                    },
                }),
            },
        });


        
       const streamResponse = await result.toDataStreamResponse();
       if (streamResponse){

        console.log(streamResponse)
       }
        
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(streamResponse); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    } */ */