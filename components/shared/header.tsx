import { Building2, ChevronDown, ChevronRight, Compass, Drama, Flame, Layers, Star, Ungroup, User, UserCircle, Users } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "@/components/ui/separator";

const Header = () => {
    return (
        <div className="flex justify-center items-center p-5 bg-neutral-700">
            <p className="font-semibold text-2xl text-white px-10">
                NEXTLIB
            </p>
            <Popover>
                <PopoverTrigger>
                    <div className="flex text-white rounded-md hover:bg-neutral-500 p-2 transition cursor-pointer">
                        <Layers className="text-white w-5 h-5"/>
                        <p className="text-md px-3">Каталог</p>
                        <ChevronDown />
                    </div>
                </PopoverTrigger>
                <PopoverContent className="bg-neutral-700 border-none w-full">
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <Layers className="w-4 h-4"/>
                                <p className="px-1">Тайтлы</p>
                                <ChevronRight className="w-5 h-5"/>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <Flame className="w-4 h-4"/>
                                <p className="px-1">Сейчас читают</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <Star className="w-4 h-4"/>
                                <p className="px-1">Коллекции</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <Compass className="w-4 h-4"/>
                                <p className="px-3">Отзывы и рецензии</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <Users className="w-4 h-4"/>
                                <p className="px-3">Команды</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <User className="w-4 h-4"/>
                                <p className="px-3">Люди</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <Drama className="w-4 h-4"/>
                                <p className="px-3">Персонажи</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <Ungroup className="w-4 h-4"/>
                                <p className="px-3">Франшизы</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <Building2 className="w-4 h-4"/>
                                <p className="px-3">Издательства</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <UserCircle className="w-4 h-4"/>
                                <p className="px-3">Пользователи</p>
                            </div>
                        </div>
                        <Separator orientation='vertical' className="text-white text-sm bg-white h-full"/>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <p>Манга</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <p>OEL-Манга</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <p>Манхва</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <p>Маньхуа</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <p>Руманга</p>
                            </div>
                            <div className="flex items-center justify-center text-white cursor-pointer hover:bg-neutral-600 p-2 rounded-md">
                                <p>Комикс</p>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
 
export default Header;