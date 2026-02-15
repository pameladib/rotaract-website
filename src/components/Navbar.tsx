import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="px-16 py-4 bg-white">
      
      <div className="flex justify-center mb-4">
       <Image src="/logo.png" alt="Rotaract Logo" className="h-16 w-auto" width={895} height={347}/>
      </div>

      <div className="flex justify-center gap-8">
        <Link href="/" className="hover:text-pink-600">Home</Link>
        <Link href="/about" className="hover:text-pink-600">About</Link>
        <Link href="/members" className="hover:text-pink-600">Members</Link>
        <Link href="/projects" className="hover:text-pink-600">Projects</Link>
        <Link href="/explore" className="hover:text-pink-600">Explore the world</Link>
        <Link href="/cookbook" className="hover:text-pink-600">International Rotaract Cookbook</Link>
        
      </div>

    </nav>
  );
}