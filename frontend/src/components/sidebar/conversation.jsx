
import useConversation from '../../zustand/useConverSation.js'

const Conversation = ({
    // eslint-disable-next-line react/prop-types
    conversations,
    // eslint-disable-next-line react/prop-types
    emoji
}) => {

    const { selectedConversation, setSelectedConversation } = useConversation()


    // eslint-disable-next-line react/prop-types
    // alert(selectedConversation?._id)
    // alert(conversations)
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            {conversations.map((item) => {
                const isSeletd = selectedConversation?._id === item._id

                return (
                    <>
                        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSeletd ? 'bg-sky-500' : ''} `}

                            onClick={() => { setSelectedConversation(item) }}>
                            <div className='avatar online'>
                                <div className='w-12 rounded-full'>
                                    <img
                                        src={item.profilePic}
                                        alt='user avatar'
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col flex-1'>
                                <div className='flex gap-3 justify-between'>
                                    <p className='font-bold text-gray-200'>{item.fullName}</p>
                                    <span className='text-xl'>{emoji}</span>
                                </div>
                            </div>
                        </div>

                        <div className='divider my-0 py-0 h-1' />
                    </>
                )
            })}
        </div>
    );
};
export default Conversation;