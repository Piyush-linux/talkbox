// import homeIcon from '@iconify/icons-mdi/home';
// import { Icon } from '@iconify/react';
import SendIco from "../assets/send.svg"
import { useState } from "react";
import useChatStore from "../stores/useChatStore";

const Prompt = () => {
    const [message, setMessage] = useState("");
    
    const addMessage = useChatStore((state) => state.addMessage);
    const fetchOpenAIResponse = useChatStore((state) => state.fetchOpenAIResponse);

    const handleSendMessage = () => {

        if (message.trim()) {
            addMessage({ text: message, fromUser: true  });
            fetchOpenAIResponse(message);
            setMessage(""); 
        }
        // console.log(message)
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">

                {/* Input area */}
                <div className="flex">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Type your message..."
                    />
                    <button
                        onClick={handleSendMessage}
                        className="ml-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-blue-600 flex items-center"
                    >
                        Send
                        <span className="ml-2">
                            <img src={SendIco} alt="Send Icon" className="w-7 h-7" />
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Prompt;



/* --- Chat History

        <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg max-w-full ${
                msg.sender === "user" ? "bg-blue-200 text-gray-700" : "bg-gray-200 text-gray-700"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

*/