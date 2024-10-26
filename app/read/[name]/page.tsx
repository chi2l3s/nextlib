"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Home() {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const bookName = segments[segments.length - 1];

    return (
        <div className="flex items-center justify-center">
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {Array.from({ length: 100 }).map((_, index) => {
                        const pageNumber = (index + 1).toString().padStart(3, '0'); // Добавляем нули
                        return (
                            <CarouselItem key={index}>
                                <Image
                                    src={`/books/${bookName}/1/${pageNumber}.png`} // Используем отформатированный номер
                                    width={3000} // Укажите нужные размеры
                                    height={2800} // Укажите нужные размеры
                                    alt={`page ${pageNumber}`}
                                />
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
