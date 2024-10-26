'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

interface BookProps {
    id: string;
    name: string;
    type: string;
    chapters: number;
}

const Book = ({
    id,
    name,
    type,
    
} : BookProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/read/${id}/1`)
    }

    return (
        <div className="flex text-white items-center justify-center group my-3 cursor-pointer" onClick={onClick}>
            <Image src='/books/jk-rich-thots/1/001.png' alt="image" width={100} height={100}
                className="rounded-md"
            />
            <div className="flex flex-col items-start ml-5">
                <p className='group-hover:text-rose-500 transition text-xl'>
                    {name}
                </p>
                <p className='text-xs font-semibold'>
                    {type}
                </p>
            </div>
        </div>
    );
}
 
export default Book;