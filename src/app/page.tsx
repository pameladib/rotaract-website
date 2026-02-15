import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Navbar />

      <main>

        <section className="px-6 md:px-16 pt-12">
          <div className="max-w-6xl mx-auto">
            <img
              src="/us.jpg"
              alt="Rotaract Members"
              className="w-full rounded-2xl object-cover"
            />

            <p className="text-center text-xl md:text-3xl font-semibold mt-8 text-gray-800">
              Young Leaders Creating Positive Change
            </p>
          </div>
        </section>


        <section className="mt-20 py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6">
              What is Rotaract?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Rotaract is a global movement of young leaders committed to
              service, friendship, and positive change. Through community
              service, professional development, and international
              collaboration, Rotaract empowers members to grow personally
              and create meaningful impact locally and worldwide.
            </p>

            <Link
              href="/about"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition"
            >
              Learn More
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}