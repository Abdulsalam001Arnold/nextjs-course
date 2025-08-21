
'use client'

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function layout({children}: Readonly<{children: React.ReactNode}>) {
    const links = [
        {href: '/register', name: 'Sign up'},
        {href: '/login', name: 'Log in'},
    ]
    const pathname = usePathname()
    return(
        <main>
        <nav className="flex gap-4 p-4 bg-gray-100">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
        </nav>
        <div>
            {children}
        </div>
        </main>
    )
};
