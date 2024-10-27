'use client';

import { useRouter } from "next/navigation";
import NavBar from "./nav-bar";
import Catalog from "./catalog";
import Search from "./search";

const Header = () => {
    const router = useRouter();

    return (
        <div className="flex justify-between items-center p-5 bg-neutral-700">
            <p className="font-semibold text-2xl text-white px-10 cursor-pointer" onClick={() => router.push('/')}>
                NEXTLIB
            </p>
            <div className="hidden md:flex group px-4">
                <Catalog side='bottom'/>
                <Search />
            </div>
            <NavBar className="flex md:hidden">
                <Catalog side='bottom'/>
                <Search />
            </NavBar>
        </div>
    );
}
 
export default Header;