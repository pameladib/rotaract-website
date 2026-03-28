"use client";
import type { Project } from "@/generated/prisma/client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const [data, setData] = useState(projects);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const categoryLabels = {
    COMMUNITY_SERVICE: "Community Service",
    INTERNATIONAL_UNDERSTANDING: "International Understanding",
    PROFESSIONAL_DEVELOPMENT: "Professional Development",
    CLUB_SERVICE: "Club Service",
    FINANCE: "Finance",
    PUBLIC_IMAGE: "Public Image"
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  async function handleDelete(id: number) {
    setLoading(true);
    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (res.ok) { // ok is a property of the Response object
        setData(prev => prev.filter(m => m.id !== id)); // Frontend state must be kept in sync with backend manually -> this line removes the deleted project from the UI immediately without waiting for a page refresh
        setOpen(false); // close modal dialog
        setSelectedId(null);
        toast.success("Project deleted successfully");

      }
      else {
        toast.error("Failed to delete project");
      }
    } catch (error) {
      toast.error("Failed to delete project");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Manage Projects
      </h1>
      <div className="max-w-3xl mx-auto mb-4">
        <Input
          value={search}
          onChange={handleChange}
          placeholder="Search Projects" />
      </div>
      <div className="flex justify-end m-4">
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-pink-600 text-white text-sm font-medium shadow-sm hover:bg-pink-700 active:scale-95 transition"
        >
          + Add Project
        </Link>
      </div>
      {data.length === 0 && (
        <p className="text-center text-gray-500">
          No Projects yet
        </p>
      )}

      <div className="space-y-4 max-w-3xl mx-auto">
        {data.filter(p => p.title.toLowerCase().includes(search.toLowerCase())).map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-sm px-5 py-4 flex items-center justify-between"
          >

            <div>
              <p className="font-semibold text-gray-900">
                {project.title}
              </p>
              <p className="text-sm text-gray-500">
                {categoryLabels[project.category]}
              </p>
            </div>


            <div className="flex gap-3">
              <div className="flex gap-3 justify-end">
                <Link
                  href={`/admin/projects/${project.id}`}
                  className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-blue-200 text-sm transition"
                >
                  Edit
                </Link>
              </div>

              <button disabled={loading} onClick={() => {
                setOpen(true);
                setSelectedId(project.id);
              }}
                className="px-3 py-1.5 rounded-md bg-red-100 text-red-600 hover:bg-red-200 text-sm transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Dialog open={open} onOpenChange={(value) => { if (!loading) setOpen(value) }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Project?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete this project
              and remove its data from our servers.
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