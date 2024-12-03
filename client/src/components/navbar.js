"use client";

import Link from "next/link";
import { useState } from "react";


const Navbar=()=> {

const NavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-sky-100 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-sky-700">
              Glamorize
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {NavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sky-700 hover:text-sky-900 hover:bg-sky-200 px-3 py-2 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block">
            <Link
              href="/login"
              className="text-sky-700 hover:text-sky-900 hover:bg-sky-200 px-3 py-2 rounded-md transition-colors mr-2"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="bg-sky-500 text-white hover:bg-sky-600 px-3 py-2 rounded-md transition-colors"
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sky-700 hover:text-sky-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sky-700 hover:text-sky-900 hover:bg-sky-200 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sky-700 hover:text-sky-900 hover:bg-sky-200 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="bg-sky-500 text-white hover:bg-sky-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;