"use client";
import { useState } from "react";
import type { Member } from "@/generated/prisma/client";

export default function MembersList({members} : {members: Member[]}) {
  const [data, setData] = useState(members);

  async function handleDelete(id: number) {
    const res = await fetch(`/api/members/${id}`, {method: "DELETE"});

    if(res.ok) setData(prev => prev.filter(m => m.id !== id)); // ok is a property of the Response object
    else alert("Failed to delete member");
  }

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Manage Members
      </h1>

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
              <button className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-sm transition">
                Edit
              </button>

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