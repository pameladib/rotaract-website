import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50">

      <main className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h1>

        <p className="text-gray-700 text-center mb-12 leading-relaxed">
          We'd love to hear from you! Whether you're interested in joining our club,
          collaborating on a project, or simply learning more about Rotaract,
          feel free to reach out.
        </p>


        <div className="grid gap-10 md:grid-cols-2">

          
          <div className="space-y-6">

            <h2 className="text-2xl font-semibold text-pink-600">
              Get in Touch
            </h2>

            <p className="text-gray-700">
              Email us anytime and we’ll get back to you as soon as possible.
            </p>

            <a
              href="mailto:rotaractclubzgharta@gmail.com"
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
            >
              Email Us
            </a>

          </div>


          <div className="space-y-6">

            <h2 className="text-2xl font-semibold text-pink-600">
              Follow Us
            </h2>

            <p className="text-gray-700">
              Stay updated with our projects, events, and activities.
            </p>

            <div className="flex gap-6">

              <a
                href="https://www.instagram.com/rotaractclubzgharta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/rotaractclubzghartazawie/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>


        <div className="mt-16 text-center">

          <h2 className="text-2xl font-semibold mb-4 text-pink-600">
            Interested in Joining?
          </h2>

          <p className="text-gray-700 mb-6">
            If you'd like to become part of our club, you can apply using the form below.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScd8R4ciGpA2VutS3W7HijEfKX6qgIE66VZAPQWRZAzka9Awg/viewform"
            target="_blank"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Apply to Join
          </a>

        </div>

      </main>
    </div>
  );
}