import Link from "next/link";

export default function AdminPage() {
  return (
    <div className=" bg-zinc-50 flex pt-20 pb-20 justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md text-center space-y-6">

        <h1 className="text-3xl font-bold text-gray-900">
          Admin Panel
        </h1>

        <p className="text-gray-500">
          Manage your website content
        </p>

        <div className="flex flex-col gap-4 mt-6">

          <Link
            href="/admin/members"
            className="w-full rounded-lg bg-gray-500 text-white py-3 font-medium hover:bg-pink-700 transition"
          >
            Manage Members
          </Link>

          <Link
            href="/admin/projects"
            className="w-full rounded-lg bg-gray-500 text-white py-3 font-medium hover:bg-gray-800 transition"
          >
            Manage Projects
          </Link>

        </div>

      </div>
    </div>
  );
}