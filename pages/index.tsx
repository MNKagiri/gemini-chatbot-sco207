import Image from "next/image";
import {useChat} from 'ai/react'

export default function Chat() {
  const {messages, input, handleInputChange, handleSubmit} = useChat()
  return (
    <> 
    <nav> <h1> A Gemini Chatbot  </h1></nav>
    <div className = "flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {messages.map(m => (
 
            <div key={m.id} className="whitespace-pre-wrap flex"> 
              <div className="mr-10 mb-10"> 
              {m.role !== 'user' ? ( <Image src="/gemini-color.svg" alt="Gemini Logo" height={10} width={19} />) : null}        
              {/*   {m.role === 'user' ? <b> User </b>: <b> Gemini</b>} */}
              </div>
              
              <div className="text-left">
                
                {/* {m.role != 'user' ? <div className= ""> </div> : <></>} */}
                {m.content}
              </div>
            </div>

        ))}
        <form onSubmit={handleSubmit}
   >
          <input 
                    /* className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" */

          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
          />
        </form>
    </div>
    </> 
  );  
}
