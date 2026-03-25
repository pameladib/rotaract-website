"use client";
import { useState } from "react";
import type { Member } from "@/generated/prisma/client";
import Link from "next/link";

export default function MembersList({ members }: { members: Member[] }) {
  const [data, setData] = useState(members);

  async function handleDelete(id: number) {
    const res = await fetch(`/api/members/${id}`, { method: "DELETE" });

    if (res.ok) setData(prev => prev.filter(m => m.id !== id)); // ok is a property of the Response object
    else alert("Failed to delete member");
  }


  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Manage Members
      </h1>
      <div className="flex justify-end m-4">
        <Link
          href="/admin/members/new"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-pink-600 text-white text-sm font-medium shadow-sm hover:bg-pink-700 active:scale-95 transition"
        >
          + Add Member
        </Link>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {data.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-sm px-5 py-4 flex items-center justify-between"
          >

            <div>
              <p className="font-semibold text-gray-900">
                {member.name}
              </p>
              <p className="text-sm text-gray-500">
                {member.role}
              </p>
            </div>


            <div className="flex gap-3">
              <div className="flex gap-3 justify-end">
                <Link
                  href={`/admin/members/${member.id}`}
                  className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-blue-200 text-sm transition"
                >
                  Edit
                </Link>
              </div>

              <button onClick={() => handleDelete(member.id)} className="px-3 py-1.5 rounded-md bg-red-100 text-red-600 hover:bg-red-200 text-sm transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}