"use client"; // Ensures proper React hook usage in Next.js

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the mobile menu

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#7C9AA0] text-white py-4 px-8 fixed top-0 w-full z-10">
            <div className="flex justify-between items-center">
                {/* Logo / Site Name */}
                <div className="text-4xl font-bold text-[#B95C17] mb-2">Jenine Gutierrez</div>

                {/* Hamburger Menu Button - Only Visible on Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>

            {/* Navigation Links */}
            <ul
                className={`${isOpen ? "flex flex-col space-y-4 mt-4" : "hidden"
                    } md:flex md:flex-row md:space-x-8 md:mt-0 text-lg`}
            >
                <li>
                    <Link href="/" className="hover:text-[#234C5D] transition">
                        ABOUT ME
          </Link>
                </li>
                <li>
                    <Link href="/resume" className="hover:text-[#234C5D] transition">
                        RESUME
          </Link>
                </li>
                <li>
                    <Link href="/coverletter" className="hover:text-[#234C5D] transition">
                        COVER LETTER
          </Link>
                </li>
                <li>
                    <Link href="/sonographer" className="hover:text-[#234C5D] transition">
                        THE SONOGRAPHER
          </Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-[#234C5D] transition">
                        CONTACT
          </Link>
                </li>
            </ul>
        </nav>
    );
}
