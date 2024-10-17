import { useEffect, useRef } from "react";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../Skeleton/MessageSkeleton";
import Messages from './Messages';

const Message = () => {
    const { messages, loading } = useGetMessage();
    console.log('message', messages);
    const lastMessageRef = useRef();

    useEffect(() => {
        // Scroll to the last message whenever messages update
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 500);

        // Cleanup timeout if component unmounts or messages change quickly

    }, [messages]);

    return (
        <div className="px-4 flex-1 overflow-auto">
            {/* Show skeletons while loading */}
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {/* Show message when loading is done but no messages are found */}
            {!loading && messages.length === 0 && (
                <p className="text-center">Send a message to start</p>
            )}

            {/* Render messages */}
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}>
                    <Messages message={message} />
                </div>
            ))}
        </div>
    );
};

export default Message;
