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
    <nav className="bg-white px-6 py-4">

      {/* TOP ROW: hamburger + logo */}
      <div className="flex items-center justify-between md:justify-center">

        {/* hamburger (mobile only) */}
        <button onClick={toggleMenu} className="md:hidden md:hidden p-3">
          ☰
        </button>

        {/* logo */}
        <Image
          src="/logo.png"
          alt="Rotaract Logo"
          width={895}
          height={347}
          className="h-16 w-auto"
        />

        {/* spacer so logo stays centered on mobile */}
        <div className="md:hidden w-6"></div>
      </div>

      {/* DESKTOP NAVIGATION */}
      <div className="hidden md:flex justify-center gap-8 mt-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/members">Members</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/explore">Explore the world</Link>
        <Link href="/cookbook">International Rotaract Cookbook</Link>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="flex flex-col gap-3 mt-4 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/members">Members</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/explore">Explore the world</Link>
          <Link href="/cookbook">International Rotaract Cookbook</Link>
        </div>
      )}

    </nav>
  );
}