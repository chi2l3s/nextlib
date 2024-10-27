import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

interface NavBarProps {
    className?: string;
    children?: React.ReactNode;
}

const NavBar = ({
    className,
    children
} : NavBarProps) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className={cn('w-6 h-6 text-white', className)}/>
            </SheetTrigger>
            <SheetContent className="bg-black flex flex-col items-center justify-start ">
                <SheetHeader >
                    <SheetTitle className="text-white text-center">
                        NEXTLIBS
                    </SheetTitle>
                </SheetHeader>
                {children}
            </SheetContent>
        </Sheet>
    );
}
 
export default NavBar;