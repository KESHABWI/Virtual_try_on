"use client";
import React, { useState } from "react";
import Link from "next/link";

const CustomNavbar = () => {
  const NavItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-lg border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-white">
              Glamorize
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {NavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-3">
            <Link
              href="/login"
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 text-sm rounded-lg font-medium shadow-lg transform transition-all duration-150 hover:scale-[1.02] hover:from-purple-700 hover:to-indigo-600"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 text-sm rounded-lg font-medium shadow-lg transform transition-all duration-150 hover:scale-[1.02] hover:from-purple-700 hover:to-indigo-600"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 space-y-2 pb-3">
              <Link
                href="/login"
                className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white block px-4 py-2 text-sm rounded-lg font-medium shadow-lg transform transition-all duration-150 hover:scale-[1.02] hover:from-purple-700 hover:to-indigo-600 text-center"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/register"
                className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white block px-4 py-2 text-sm rounded-lg font-medium shadow-lg transform transition-all duration-150 hover:scale-[1.02] hover:from-purple-700 hover:to-indigo-600 text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default CustomNavbar;
