// import React, { useState } from 'react';
// import useChatStore from "../stores/useChatStore";

// const ChatHistory = () => {

// const messages = useChatStore((state) => state.messages);
// const chatEndRef = useRef(null);
// // Scroll to bottom whenever messages change
// useEffect(() => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [messages]); // Run whenever the messages change

//   return (
//     <div className="w-full h-[500px] bg-gray-100 p-4 flex flex-col-reverse overflow-hidden">
//       <div className=" py-6 flex-grow overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-gray-100">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`flex font-ubuntu ${message.fromUser ? 'justify-end pr-6' : 'justify-start pl-6'}`}
//           >
//             <div
//               className={`max-w-xs p-3 rounded-lg text-white ${message.fromUser ? 'bg-emerald-500' : 'bg-gray-500'}`}
//             >
//               {message.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChatHistory;

import React, { useEffect, useRef } from 'react';
import useChatStore from "../stores/useChatStore";

const ChatHistory = () => {
  const messages = useChatStore((state) => state.messages);
  const chatEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // Run whenever the messages change

  return (
    <div className="w-full h-[500px] bg-gray-100 p-4 flex flex-col-reverse overflow-hidden">
      <div className="py-6 flex-grow overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-gray-100">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex font-ubuntu ${message.fromUser ? 'justify-end pr-6' : 'justify-start pl-6'}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg text-white ${message.fromUser ? 'bg-emerald-500' : 'bg-gray-500'}`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {/* This is the reference point for scrolling to the bottom */}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
};

export default ChatHistory;
