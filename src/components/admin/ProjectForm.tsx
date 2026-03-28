"use client";

import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectValue,
    SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ProjectCategory } from "@/generated/prisma/client";
import { uploadImage } from "@/lib/upload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
    initialData?: {
        id: number;
        slug: string;
        title: string;
        description: string;
        content: string;
        imageSrc: string;
        category: ProjectCategory;
        gallery: string[];
    };
}


export default function ProjectForm({ initialData }: Props) {
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [form, setForm] = useState({ // if initialData is defined, use its properties. If undefined, use empty strings ""
        title: initialData?.title || "",
        description: initialData?.description || "",
        content: initialData?.content || "",
        category: initialData?.category || "",
        imageSrc: initialData?.imageSrc || "",
    });

    const categoryLabels = {
        COMMUNITY_SERVICE: "Community Service",
        INTERNATIONAL_UNDERSTANDING: "International Understanding",
        PROFESSIONAL_DEVELOPMENT: "Professional Development",
        CLUB_SERVICE: "Club Service",
        FINANCE: "Finance",
        PUBLIC_IMAGE: "Public Image"
    }

    const isEdit = !!initialData; // !! converts initialData into a boolean. If initialData is defined -> true, else false
    const buttonLabel = isEdit ? "Update Project" : "Add Project";
    const url = isEdit ? `/api/projects/${initialData.id}` : "/api/projects";

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        const selected = e.target.files?.[0]; // get the selected file
        // ?. -> optional chaining: in case nothing is selected -> selected = undefined
        if (!selected) return; // if no file is selected, return (stop function)

        if (!selected.type.startsWith("image/")) { // validate file type (optional)
            toast.error("Only images allowed");
            return;
        }

        if (selected.size > 2 * 1024 * 1024) { // validate file size (limit = 2 MB)
            toast.error("Max size is 2MB");
            return;
        }

        setFile(selected); // store file in state to upload later

        setPreview(URL.createObjectURL(selected)); // preview URL
    }


    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);

        let imageUrl = form.imageSrc;

        try {
            if (file) {
                imageUrl = await uploadImage(file);
            }

            const res = await fetch(url, {
                method: isEdit ? "PATCH" : "POST",
                body: JSON.stringify({
                    ...form, // here we used the spread operator because we needed to override the imageSrc property. otherwise we could have used JSON.stringify(form) directly
                    imageSrc: imageUrl, // overriding the imageSrc property of the form state object
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                const message = isEdit ? "Project Updated successfully" : "Project created successfully";
                toast.success(message);

                // reset form on create
                if (!isEdit) {
                    setForm({
                        title: "",
                        description: "",
                        content: "",
                        category: "",
                        imageSrc: "",
                    });

                    setFile(null);

                }
                router.push("/admin/projects");

            }

        } catch (err) {
            toast.error("Upload failed");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;

        setForm({
            ...form, 
            [name]: value, // computed property name
        });
    }

    return (
        <div className="min-h-screen bg-zinc-50 flex justify-center py-12 px-4">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm p-6 space-y-6">

                <h1 className="text-2xl font-semibold text-gray-900 text-center">
                    {isEdit ? "Update Project" : "Add New Project"}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Title</label>
                        <Input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Enter title" required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Description</label>
                        <Input
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Enter description" required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Content</label>
                        <Input
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            placeholder="Enter content" required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Category</label>
                        <Select
                            value={form.category}
                            onValueChange={(value) =>
                                setForm({ ...form, category: value })
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select category" /> 
                            </SelectTrigger>

                            <SelectContent>
                                {Object.keys(categoryLabels).map((category) => (
                                    <SelectItem key={category} value={category}> { /* key is for React for list rendering, and value is for select*/}
                                        {categoryLabels[category as ProjectCategory]} 
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-sm font-medium text-gray-700">
                            Upload Image
                        </label>

                        <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:border-pink-400 transition">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFile}
                                className="w-full text-sm text-gray-600 
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:bg-pink-100 file:text-pink-700
                hover:file:bg-pink-200
                cursor-pointer"
                            />
                            {(preview || form.imageSrc) && (
                                <img src={preview || form.imageSrc} alt="Preview" className="w-32 h-32 object-cover rounded-lg mt-2 border" />
                            )}
                        </div>
                    </div>

                    <Button disabled={loading} className="w-full mt-4 transition transform hover:scale-105">
                        {loading ? "Saving..." : buttonLabel}
                    </Button>
                </form>
            </div>
        </div>
    );
}