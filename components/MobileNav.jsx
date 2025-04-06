"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
    // {
    //     name: 'control Panel',
    //     path: '/control-panel'
    // }
];

const MobileNav = () => {
    const pathName = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-[var(--color-accent)]" />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold mt-32 mb-20">
                    Areen<span className="text-[var(--color-accent)]">.</span>
                </h1>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {
                        links.map((item, idx) => {
                            return <SheetClose asChild key={item.path}>
                                <Link href={item.path} key={item.path}
                                    className={`${pathName == item.path && "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"} text-xl capitalize hover:text-[var(--color-accent)] transition-all`}
                                >
                                    {item.name}
                                </Link>
                            </SheetClose>
                        })
                    }
                </nav>
                <Link href="/control-panel">
                    <Button
                        className="bg-[var(--color-accent)] hover:bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-all duration-300 mt-3"
                    >
                        Control Panel
                    </Button>
                </Link>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav