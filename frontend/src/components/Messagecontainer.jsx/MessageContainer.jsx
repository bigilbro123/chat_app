// import { useEffect } from "react";
import { useAuthContext } from "../../context/AthuContext";
import useConversation from "../../zustand/useConverSation";
import Message from "./Message"
import MessageInput from "./MessageInputs"
import { TiMessages } from "react-icons/ti";


const MessageContainer = () => {
    const { selectedConversation } = useConversation()

    // useEffect(() => {
    //     return () => {
    //         setSelectedConversation(null)
    //     }
    // }, [setSelectedConversation])
    return (
        <div className="md:min-w-[500px]   lg:min-w-[600px] flex flex-col">

            <>
                {!selectedConversation ? <NoChatSelected /> : <>
                    <div className="bg-slate-500 px4 py-2">
                        <span className="label-text"> TO:</span>
                        <span className="text-gray-900 font-bold">
                            {selectedConversation?.fullName}
                        </span>

                    </div>
                    <Message />
                    <MessageInput /></>}
            </>
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    const { AthuUser } = useAuthContext()
    return (
        <div className='flex relative items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋{AthuUser.fullName} ❄</p>

                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />

            </div>
            <h6 className="text-md absolute bottom-3">
                End-to-end encrypted
            </h6>
        </div>
    );
};