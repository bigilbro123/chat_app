import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {

    const [message, setMessage] = useState('')
    const { sendMessage, loading } = useSendMessage()
    const handleSumit = async (e) => {

        e.preventDefault()
        if (!message) return;
        await sendMessage(message)
        setMessage('')

    }
    return (
        <form className='px-4 my-3 relative' onSubmit={handleSumit}>
            <div className='w-full'>
                <input
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>

                    {loading ? (<div className="loading loading-spinner mr-3"></div>) : (<BsSend className="mr-3" title="send" />)}
                </button>
            </div>
        </form>
    );
};
export default MessageInput;