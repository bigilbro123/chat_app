

import useGetConverstion from "../../hooks/useGetConverstion";
import { getRandomEmoji } from "../../util/emoji";
import Conversation from "./conversation";

const Conversations = () => {
    const { conversation, loading } = useGetConverstion()
    if (conversation.message === 'unauthrized access') {
        localStorage.removeItem('chat-user')
    }
    console.log(conversation);

    return (
        <div className='py-2 flex flex-col '>
            {loading ? (<div className="flex flex-col gap-7">
                <span className="loading loading-spinner"></span>
                <span className="loading loading-spinner"></span>
                <span className="loading loading-spinner"></span>
                <span className="loading loading-spinner"></span>
                <span className="loading loading-spinner"></span>
            </div>) : (<Conversation emoji={getRandomEmoji()} key={conversation._id} conversations={conversation} />
            )}
        </div>
    );
};
export default Conversations;