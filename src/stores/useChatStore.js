import { create } from "zustand";
import axios from 'axios';

const useChatStore = create((set) => ({
    messages: [
        { text: 'Hello!', fromUser: true },
        { text: 'Hi! How can I help you?', fromUser: false },
        { text: 'Can you tell me the weather today?', fromUser: true },
        { text: 'Sure! It is sunny.', fromUser: false },
    ],

    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),

    clearMessages: () => set({ messages: [] }),

    fetchOpenAIResponse: async (prompt) => {
        
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: 'gpt-4', // or another OpenAI model
                messages: [{"role": "user", "content": prompt}],
                max_tokens: 150,
                temperature: 0.7,
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`, // Replace with your OpenAI API Key
                },
            });

            const responseMessage = response.data.choices[0].message.content;
            // [0].text.trim()
            console.log(responseMessage)
            set((state) => ({
                messages: [
                    ...state.messages,
                    // { text: prompt, fromUser: true },
                    { text: responseMessage, fromUser: false }
                ],
            }));
        } catch (error) {
            console.error("Error fetching OpenAI response:", error);
            set((state) => ({
                messages: [
                    ...state.messages,
                    { text: prompt, fromUser: true },
                    { text: "Sorry, something went wrong.", fromUser: false }
                ],
            }));
        }
    }

}));

export default useChatStore;
