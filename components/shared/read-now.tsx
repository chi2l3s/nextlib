import { ChevronRight } from "lucide-react";
import Book from "./book";

const ReadNow = () => {
    return (
        <div className="bg-neutral-600 rounded-md flex flex-col items-start justify-center p-10 my-10 max-w-3xl mx-auto text-white">
            <div className="text-white items-start text-xl transition ">
                <div className="flex hover:text-rose-600 cursor-pointer transition">
                    <p>Сейчас читают</p>
                    <ChevronRight/>
                </div>
                <p className="font-semibold text-md flex-shrink-0">
                    Новинки
                </p>
            </div>
            <div className="grid-cols-1">
                <Book 
                    id="jk-rich-thots"
                    name="Зажиточные школьницы"
                    type="Манга"
                    chapters={4}
                />
            </div>
        </div>
    );
}

export default ReadNow;
