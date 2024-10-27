import { SearchIcon } from "lucide-react";

const Search = () => {
    return (
        <div className="flex text-white rounded-md hover:bg-neutral-500 p-2 transition cursor-pointer">
            <SearchIcon className="text-white w-5 h-5" />
            <p className="text-md px-3">Посиск</p>
        </div>
    );
}

export default Search;