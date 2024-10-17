import MessageContainer from "../../components/Messagecontainer.jsx/MessageContainer"
import SiderBar from "../../components/sidebar/SiderBar"

const Home = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <SiderBar />
            <MessageContainer />
        </div>
    )
}

export default Home