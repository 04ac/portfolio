import Link from "next/link";
import { Button } from "./ui/button";
import DesktopNav from "./Nav";

function Header() {
    return (
        <header className="py-8 xl:py-12 bg-pink-50/20">
            <div className="px-4 container mx-auto">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Areen<span className="text-[var(--color-accent)]">.</span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex">
                    <DesktopNav />
                </div>
            </div>
        </header>
    );
}

export default Header;