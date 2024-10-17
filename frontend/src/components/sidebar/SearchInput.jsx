import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import useConversation from "../../zustand/useConverSation";
import useGetConverstion from "../../hooks/useGetConverstion";

const SearchInput = () => {
    const [search, setSearch] = useState('');
    const { setSelectedConversation } = useConversation();
    const { conversation } = useGetConverstion();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!search) return;

        if (search.length < 4) {
            return alert('Search term must be at least 4 characters');
        }

        const foundConversation = conversation.find((c) =>
            c.fullName.toLowerCase().includes(search.toLowerCase())
        );

        if (foundConversation) {
            setSelectedConversation(foundConversation);
            setSearch(''); // Clear search after selection
        } else {
            alert('No user found');
            setSearch('')
        }
    };

    return (
        <form className='items-center gap-2 flex' onSubmit={handleSubmit}>
            <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search…'
                className='input input-bordered rounded-full'
            />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    );
};

export default SearchInput;
