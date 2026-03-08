import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-10 ">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start">
                <section>
                    <p className="font-semibold text-lg">
                        Rotaract Club of Zgharta Zawie
                    </p>
                    <p className="text-gray-600 mt-2">
                        Young Leaders Creating Positive Change
                    </p>
                    <p className="text-gray-600 mt-2">
                        Part of Rotary International
                    </p>
                </section>

                <section className="flex flex-col gap-2 items-center">
                    <p className="font-semibold text-lg">
                        Quick Links
                    </p>
                        <Link className="text-gray-600 hover:text-pink-600" href="/about">About</Link>
                        <Link className="text-gray-600 hover:text-pink-600" href="/members">Members</Link>
                        <Link className="text-gray-600 hover:text-pink-600" href="/projects">Projects</Link>

                </section>

                <section className="flex flex-col gap-2 items-start">
                    <p className="font-semibold text-lg">
                        Contact Us
                    </p>
                    <a href="mailto:rotaractclubzgharta@gmail.com">
                       Email Address: rotaractclubzgharta@gmail.com
                    </a>
                    <a href="tel:+96103178238">
                      tel: +961 03 178 238
                    </a>
                </section>

                <section>
                    <p className="font-semibold text-lg mb-3">Follow Us</p>
                    <div className="flex gap-4">
                        <a
                            href="https://www.instagram.com/rotaractclubzgharta/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/instagram.svg"
                                alt="Instagram"
                                className="w-6 h-6 hover:scale-110 transition"
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/rotaractclubzghartazawie/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/LI-In-Bug.png"
                                alt="LinkedIn"
                                className="w-6 h-6 hover:scale-110 transition"
                            />
                        </a>
                    </div>

                </section>

            </div>
           <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
                © 2026 Rotaract Club of Zgharta Zawie
            </div>
        </footer>
    );
}