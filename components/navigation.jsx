"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav
      className="bg-black shadow-sm sticky top-0 z-50 border-b border-gray-800"
      style={{ marginBottom: "-1rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">AlShahida</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1">
              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  isActive("/about")
                    ? "bg-red-900 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/ourServices"
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  isActive("/ourServices")
                    ? "bg-red-900 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                Services
              </Link>
              <Link
                href="/brands"
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  isActive("/brands")
                    ? "bg-red-900 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                Our Brands
              </Link>
              <Link
                href="/event"
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  isActive("/event")
                    ? "bg-red-900 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                Catering/Event
              </Link>
              <Link
                href="/investors"
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  isActive("/investors")
                    ? "bg-red-900 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                Investors
              </Link>
              <Link
                href="/contactUs"
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  isActive("/contactUs")
                    ? "bg-red-900 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1 border-t border-gray-700">
          <Link
            href="/about"
            className={`block px-4 py-2 text-base font-medium ${
              isActive("/about")
                ? "bg-red-900 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/ourServices"
            className={`block px-4 py-2 text-base font-medium ${
              isActive("/ourServices")
                ? "bg-red-900 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Service
          </Link>
          <Link
            href="/brands"
            className={`block px-4 py-2 text-base font-medium ${
              isActive("/brands")
                ? "bg-red-900 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Our Brands
          </Link>
          <Link
            href="/event"
            className={`block px-4 py-2 text-base font-medium ${
              isActive("/event")
                ? "bg-red-900 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Catering/Event
          </Link>
          <Link
            href="/investors"
            className={`block px-4 py-2 text-base font-medium ${
              isActive("/investors")
                ? "bg-red-900 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Investors
          </Link>
          <Link
            href="/contactUs"
            className={`block px-4 py-2 text-base font-medium ${
              isActive("/contactUs")
                ? "bg-red-900 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
