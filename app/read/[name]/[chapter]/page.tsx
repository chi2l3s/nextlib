"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const pathname = usePathname();
    const segments = pathname.split('/');
    const bookName = segments[segments.length - 2];
    const chapter = segments[segments.length - 1];
    const nextChapter = parseInt(chapter) + 1;

    const nextPage = () => {
        if (nextChapter === 5) {
            return
        }
        router.push(`/read/${bookName}/${nextChapter}`);
    }

    const previousPage = () => {
        if (parseInt(chapter) === 1) {
            return
        }
        router.push(`/read/${bookName}/${nextChapter - 2}`);
    }

    return (
        <div className="relative flex items-center justify-center flex-col px-1 py-5 bg-neutral-700 mx-auto max-w-xl my-20 rounded-lg">
            <Carousel className="w-full max-w-xs px-50">
                <CarouselContent>
                    {Array.from({ length: 100 }).map((_, index) => {
                        const pageNumber = (index + 1).toString().padStart(3, '0');
                        const src = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/books/${bookName}/${chapter}/${pageNumber}.png`;
                        return (
                            <CarouselItem key={index} className="mx-15">               
                                <Image
                                    src={src}
                                    width={6000}
                                    height={5800}
                                    alt={`page ${pageNumber}`}
                                    className="w-full"
                                    
                                />
                                
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <div className="hidden md:flex">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
            <div className="text-white font-semibold flex px-4">
                <ChevronLeft onClick={previousPage} className="hover:text-rose-600 hover:scale-110 hover:translate-x-2 transition w-20 h-20 py-1"/>
                <ChevronRight onClick={nextPage} className="hover:text-rose-600 hover:scale-110 hover:translate-x-2 transition w-20 h-20 px-1"/>   
            </div>  
        </div>
    );
}