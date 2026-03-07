import Navbar from "@/components/Navbar";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black font-sans">

            <main className="w-full bg-white bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-4xl font-bold text-center mb-10">
                        About Us
                    </h1>

                    
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-pink-600">
                            What is Rotaract?
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Rotaract is a global movement of young leaders committed to service,
                            friendship, and positive change. Bringing together students and
                            professionals from around the world, Rotaract empowers its members
                            to develop leadership skills, serve their communities, and build
                            meaningful international connections.
                        </p>

                        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                            More than just a club, it is a space where ideas grow into action,
                            where cultures meet, and where small efforts create lasting impact.
                            Through service projects, cultural exchange, and professional
                            development, Rotaract inspires young people to shape a better,
                            kinder, and more connected world.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-pink-600">
                            Our Mission
                        </h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            The mission of our club is to transform ideas into action. Through
                            community service, international collaboration, and professional
                            development, we seek to develop compassionate leaders who are ready
                            to make a difference.
                        </p>

                        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                            We believe in the power of teamwork, creativity, and cultural
                            exchange to address real needs and create positive, sustainable
                            impact both locally and globally.
                        </p>
                    </section>
                </div>
            </main> 
        </div>
    );
}