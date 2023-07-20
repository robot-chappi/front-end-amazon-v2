import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const {push} = useRouter()

    return (
        <div>   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-secondary">Search</label>
            <div className="relative flex items-center">
                <div className="absolute left-0 flex items-center pl-3 pointer-events-none">
                    <BsSearch className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                </div>
                <input onChange={(e) => setSearchTerm(e.target.value)} type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
                <button onClick={() => push(`/explorer?searchTerm=${searchTerm}`)} className="text-secondary absolute right-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-5">Search</button>
            </div>
        </div>
    );
};

export default Search;