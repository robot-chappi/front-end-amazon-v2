import { FC } from 'react';
import { RiAddFill } from 'react-icons/ri';

interface Tools {
    onClick: () => void
}

const Tools: FC<Tools> = ({onClick}) => {
    return (
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                <div>
                <h5 className="mr-3 font-semibold text-gray-500 dark:text-gray-400">Tools</h5>
                <p className="text-gray-500 dark:text-gray-400">Create and edit right away</p>
                </div>
                <button onClick={onClick} className="flex items-center justify-center px-4 py-2 text-sm font-medium text-dark rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    <RiAddFill/>
                    Create
                </button>
            </div>
        </div>
    );
};

export default Tools;