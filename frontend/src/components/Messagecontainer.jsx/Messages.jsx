import { useAuthContext } from "../../context/AthuContext"
import timeAgo from "../../hooks/time"
import useConversation from "../../zustand/useConverSation"

const Messages = ({ message }) => {
    const { selectedConversation } = useConversation()

    const { AthuUser } = useAuthContext()

    // eslint-disable-next-line react/prop-types
    const fromMe = !message.senderId && !message.receiverId || message?.senderId === AthuUser?._id
    const chatClass = fromMe ? 'chat-end' : 'chat-start'

    const Profile = fromMe ? AthuUser?.profilePic : selectedConversation?.profilePic
    const bubbleBgcolor = fromMe ? 'bg-blue-500' : ''
    return (
        <>
            <div className={`chat ${chatClass} `}>
                <div className='chat-image avatar'>
                    <div className='w-10 rounded-full'>
                        <img alt='Tailwind CSS chat bubble component' src={Profile || 'https://avatar.iran.liara.run/public/boy?username=jbgfjb7676'} />
                    </div>
                </div>

                <div className={`chat-bubble text-white ${bubbleBgcolor} pb-2`}>{message?.message}</div>
                <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{timeAgo(message?.createdAt)}</div>
            </div>
            {/* <div className={'chat chat-start '}>
                <div className='chat-image avatar'>
                    <div className='w-10 rounded-full'>
                        <img alt='Tailwind CSS chat bubble component' src='https://avatar.iran.liara.run/public/boy?username=john_doe' />
                    </div>
                </div>
                <div className={`chat-bubble text-white bg-blue-500  pb-2`}>Hi bro</div>
                <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:34</div>
            </div> */}
        </>
    )
}

export default Messages