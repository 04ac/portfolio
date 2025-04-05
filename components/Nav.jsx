"use client";
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
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
    {
        name: 'control Panel',
        path: '/control-panel'
    }
];

const DesktopNav = () => {
    const pathName = usePathname();
    console.log(pathName);

    return (
        <nav className='flex gap-8'>
            {links.map((e, idx) => {
                return <Link 
                    href={e.path}
                    key={idx}
                    className={`${e.path === pathName && "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"} capitalize font-medium hover:text-[var(--color-accent)] transition-all`}
                >
                    {e.name}
                </Link>
            })}
        </nav>
    );
};

export default DesktopNav;