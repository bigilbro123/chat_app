import Conversations from "./conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"


const SiderBar = () => {
    return (
        <div className="relative overflow-y-scroll">
            <SearchInput />

            <div className="divider px-3 "></div>
            <Conversations />
            <div className="fixed z-10 bottom-0 w-fit p-4 bg-gray-600 rounded">
                <LogoutButton />
            </div>
        </div>
    )
}

export default SiderBar