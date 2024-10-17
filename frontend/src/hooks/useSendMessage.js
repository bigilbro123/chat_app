import { useState } from "react";
import useConversation from "../zustand/useConverSation";
import backend from "../AIP/backend";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message1) => {
        setLoading(true);
        try {
            const res = await fetch(backend.backend + `/api/message/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include', // Include cookies for session
                body: JSON.stringify({ message: message1 })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error('Error while sending message');
            }

            // Append the new message to the global messages state
            setMessages([...messages, data]); // 'data' should contain the newly sent message

        } catch (error) {
            console.error("Error while sending message:", error);
            alert("An error occurred: " + error.message); // Better error handling
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};

export default useSendMessage;
