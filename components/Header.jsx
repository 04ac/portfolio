import Link from "next/link";
import { Button } from "./ui/button";
import DesktopNav from "./Nav";

function Header() {
    return (
        <header className="py-8 @xl:py-12">
            <div className="px-4 @container mx-auto center flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Areen<span className="text-[var(--color-accent)]">.</span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden @xl:flex items-center gap-8">
                    <DesktopNav />
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="@xl:hidden">Mobile Nav</div>
            </div>
        </header>
    );
}

export default Header;