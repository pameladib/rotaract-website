import Navbar from "@/components/Navbar";
import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      <header>
      </header>

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

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">


            <div>
              <h3 className="text-3xl font-bold mb-6">
                What We Do
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg">
                <li>Organize service initiatives that support the local community</li>
                <li>Build partnerships with Rotaract clubs around the world</li>
                <li>Host cultural, social, and networking events</li>
                <li>Lead projects that create positive and lasting impact</li>
              </ul>
            </div>


            <div className="flex flex-col items-center">
              <Image
                src="/elderlyvisit.jpeg"
                width={600}
                height={400}
                alt="Elderly Visit"
                className="rounded-xl shadow-md object-cover"
              />

              <div className="mt-4 bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-600">
                <span className="font-semibold">Elderly Visit</span> — February 14, 2026
              </div>
            </div>

          </div>
        </section>

        <section className="m-4 bg-gray-50">
          <ProjectCarousel />
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-16">
              Interested in Becoming a Member?
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">

              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Why Join Us?
                </h3>

                <p className="text-gray-600 mb-4">
                  Rotaract offers young people the opportunity to develop leadership
                  skills, participate in meaningful community service projects, and
                  build lifelong friendships.
                </p>

                <ul className="space-y-3 text-gray-700">
                  <li>• Gain meaningful leadership experience</li>
                  <li>• Participate in community service projects</li>
                  <li>• Connect with young leaders locally and internationally</li>
                  <li>• Develop professional and teamwork skills</li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-xl shadow-sm text-center">

                <h4 className="text-xl font-semibold mb-6">
                  Join Our Club
                </h4>

                <div className="flex flex-col gap-4 items-center">

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScd8R4ciGpA2VutS3W7HijEfKX6qgIE66VZAPQWRZAzka9Awg/viewform"
                    target="_blank"
                    className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition"
                  >
                    Fill the Form to Join
                  </a>

                  <a
                    href="mailto:rotaractclubzgharta@gmail.com"
                    className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
                  >
                    Email Us
                  </a>

                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
      <footer>

      </footer>
    </div>
  );
}