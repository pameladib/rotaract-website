"use client";
import { useState } from "react";
import type { Member } from "@/generated/prisma/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function MembersList({ members }: { members: Member[] }) {
  const [loading, setLoading] = useState(false); // for loading state
  const [data, setData] = useState(members);
  const [open, setOpen] = useState(false); // for modal dialog
  const [selectedId, setSelectedId] = useState<number | null>(null); // selected member to delete
  const [search, setSearch] = useState("");

  async function handleDelete(id: number) {
    setLoading(true);
    try {
      const res = await fetch(`/api/members/${id}`, { method: "DELETE" });
      if (res.ok) {
        setData(prev => prev.filter(m => m.id !== id)); // ok is a property of the Response object
        setOpen(false);
        setSelectedId(null);
        toast.success("Member deleted successfully");

      }
      else {
        toast.error("Failed to delete member");
      }
    } catch (error) {
      toast.error("Failed to delete member");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }


  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Manage Members
      </h1>
      <div className="max-w-3xl mx-auto mb-4">
        <Input 
        value={search}
        onChange={handleChange}
        placeholder="Search Members"/>
      </div>
      <div className="flex justify-end m-4">
        <Link
          href="/admin/members/new"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-pink-600 text-white text-sm font-medium shadow-sm hover:bg-pink-700 active:scale-95 transition"
        >
          + Add Member
        </Link>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">

        {data.length === 0 && (
          <p className="text-center text-gray-500">
            No members yet
          </p>
        )}
        {data.filter(m=> m.name.toLowerCase().includes(search.toLowerCase())).map((member) => (
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

              <button disabled={loading} onClick={() => {
                setOpen(true);
                setSelectedId(member.id);
              }} className="px-3 py-1.5 rounded-md bg-red-100 text-red-600 hover:bg-red-200 text-sm transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Dialog open={open} onOpenChange={(value) => {if(!loading) setOpen(value)}}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Member?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete this member
              and remove their data from our servers.
            </DialogDescription>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="ghost" onClick={() => { setOpen(false) }}>Cancel</Button>
              <Button disabled={loading} variant="destructive" onClick={async () => {
                if (!selectedId) return;
                await handleDelete(selectedId);
              }}>{loading ? "Deleting..." : "Delete"}</Button>
            </div>

          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}