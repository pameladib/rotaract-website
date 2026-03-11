"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="bg-white px-6 py-4 sticky top-0 z-50">


      <div className="flex items-center justify-between md:justify-center">


        <button onClick={toggleMenu} className="md:hidden md:hidden p-3">
          ☰
        </button>


        <Image
          src="/logo.png"
          alt="Rotaract Logo"
          width={895}
          height={347}
          className="h-16 w-auto"
        />


        <div className="md:hidden w-6"></div>
      </div>


      <div className="hidden md:flex justify-center gap-8 mt-4">
        <Link href="/" className="px-2 py-1 rounded-md hover:text-pink-600 active:bg-gray-200 active:scale-95 transition">
          Home
        </Link>

        <Link href="/" className="px-2 py-1 rounded-md hover:text-pink-600 active:bg-gray-200 active:scale-95 transition">
          About
        </Link>

        <Link href="/" className="px-2 py-1 rounded-md hover:text-pink-600 active:bg-gray-200 active:scale-95 transition">
          Members
        </Link>

        <Link href="/" className="px-2 py-1 rounded-md hover:text-pink-600 active:bg-gray-200 active:scale-95 transition">
          Projects
        </Link>

        <Link href="/" className="px-2 py-1 rounded-md hover:text-pink-600 active:bg-gray-200 active:scale-95 transition">
          Contact Us
        </Link>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-3 mt-4 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/members">Members</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact Us</Link>
          {/* <Link href="/explore">Explore the world</Link>
          <Link href="/cookbook">International Rotaract Cookbook</Link> */}
        </div>
      )}

    </nav>
  );
}