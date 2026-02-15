import Navbar from "@/components/Navbar";

export default function CookbookPage() {
  return (
    <div className="bg-white font-sans min-h-screen">
      <Navbar />

      <main className="px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">
          International Rotaract Cookbook
        </h1>

        <p className="text-xl text-gray-600">
          🍳 Recipes from Rotaract clubs around the world!
        </p>

        <p className="mt-4 text-gray-500">
          This page will feature recipes shared by international clubs,
          with step-by-step instructions and downloadable PDFs.
        </p>

        <div className="mt-10 text-pink-600 font-semibold">
          Coming soon!
        </div>
      </main>
    </div>
  );
}