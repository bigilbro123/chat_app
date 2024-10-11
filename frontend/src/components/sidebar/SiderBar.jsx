import Conversations from "./conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"


const SiderBar = () => {
    return (
        <div>
            <SearchInput />

            <div className="divider px-3  "></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default SiderBar