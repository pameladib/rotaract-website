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
import { ProjectCategory } from "../../../generated/prisma/client";
import { uploadImage } from "@/lib/upload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { generateRotaryYears, ROTARY_START_YEAR, ROTARY_YEAR_COUNT } from "@/lib/utils";

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
        rotaryYear: string;
    };
}


export default function ProjectForm({ initialData }: Props) {
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [gallery, setGallery] = useState<File[]>([]);
    const [form, setForm] = useState({ // if initialData is defined, use its properties. If undefined, use empty strings ""
        title: initialData?.title || "",
        description: initialData?.description || "",
        content: initialData?.content || "",
        category: initialData?.category || "",
        imageSrc: initialData?.imageSrc || "",
        rotaryYear: initialData?.rotaryYear || "",
        gallery: initialData?.gallery || []
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

    function removeNewImage(index: number) {
        setGallery(prev => prev.filter((_, i) => i !== index));
    }

    function removeExistingImage(index: number) {
        setForm(prev => ({ // gives us previous state safely
            ...prev, // copy the old state -> this keeps everything the same
            gallery: prev.gallery.filter((_, i) => i !== index) // override only gallery and keep all the images except the image at the passed index to remove it
        })); // (_, i) is same as (file, index) but since we only need the index for this logic, we write _ instead of file
    }

    const rotaryYears = generateRotaryYears(ROTARY_START_YEAR, ROTARY_YEAR_COUNT);

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        const selected = e.target.files?.[0]; // get the selected file
        // ?. -> optional chaining: in case nothing is selected -> selected = undefined
        if (!selected) return; // if no file is selected, return (stop function)

        if (!selected.type.startsWith("image/")) { // validate file type (optional)
            toast.error("Only images allowed");
            return; // stop function execution if invalid
        }

        if (selected.size > 2 * 1024 * 1024) { // validate file size (limit = 2 MB)
            toast.error("Max size is 2MB");
            return;
        }

        setFile(selected); // store file in state to upload later

        setPreview(URL.createObjectURL(selected)); // preview URL
        e.target.value = "";
    }

    function handleGalleryFile(e: React.ChangeEvent<HTMLInputElement>) {
        const files = Array.from(e.target.files || []); // e.target.files is a FileList so we have to convert it to an array, || [] prevents crash if nothing is selected

        const validFiles: File[] = []; // telling TS that this array will only contain File objects to prevent random types from being pushed

        for (const file of files) {
            if (!file.type.startsWith("image/")) { // validate file type (optional)
                toast.error(`${file.name} is not an image`);
                continue; // do not stop function execution, only skip to the next file
            }

            if (file.size > 2 * 1024 * 1024) { // validate file size (limit = 2 MB)
                toast.error(`${file.name} exceeds 2MB`);
                continue;
            }
            validFiles.push(file);
        }

        setGallery(prev => [...prev, ...validFiles]); // store file in state to upload later
        e.target.value = "";
    }


    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);

        let imageUrl = form.imageSrc;
        let galleryUrls: string[] = [...form.gallery]; // we use the spread operator to copy the form.gallery array; if we used it directly, it would not create a copy but a reference to the form.gallery array -> updating galleryUrls would also update form.gallery

        try {
            if (file) {
                imageUrl = await uploadImage(file);
            }

            for (const file of gallery) {
                const url = await uploadImage(file);
                galleryUrls.push(url);
            }

            const res = await fetch(url, {
                method: isEdit ? "PATCH" : "POST",
                body: JSON.stringify({
                    ...form, // here we used the spread operator because we needed to override the imageSrc property. otherwise we could have used JSON.stringify(form) directly
                    imageSrc: imageUrl, // overriding the imageSrc property of the form state object
                    gallery: galleryUrls
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
                        rotaryYear: "",
                        gallery: []
                    });

                    setFile(null);
                    setGallery([]);

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
                        <label className="text-sm text-gray-600">Year</label>
                        <Select
                            value={form.rotaryYear}
                            onValueChange={(value) =>
                                setForm({ ...form, rotaryYear: value })
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Year" />
                            </SelectTrigger>

                            <SelectContent>
                                {rotaryYears.map((year) => (
                                    <SelectItem key={year} value={year}>
                                        {year}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
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
                    <div className="flex flex-col gap-3">
                        <label className="text-sm font-medium text-gray-700">
                            Upload Gallery (Optional)
                        </label>

                        <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:border-pink-400 transition">
                            <input
                                type="file" multiple
                                accept="image/*"
                                onChange={handleGalleryFile}
                                className="w-full text-sm text-gray-600 
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:bg-pink-100 file:text-pink-700
                hover:file:bg-pink-200
                cursor-pointer"
                            />

                            {/* gallery preview: existing + new images */}
                            {/* temporary state (File[]) + persisted state (string[]) */}
                            <div className="flex flex-wrap gap-2 mt-3"> {/* flex lays images in a row (horizontally), flex-wrap wraps to next line if needed, and gap-2 mt-3 adds spacing */}

                                {form.gallery.map((url, index) => ( // form.gallery is an array of strings, it contains the URLs of the existing images -> we use url and index
                                    <div key={`existing-${index}`} className="relative"> {/* React needs unique keys across lists -> we add existing- prefix for the keys of this list since we're using index in both lists */}
                                        {/* parent must have relative position to create a positioning context for absolute children*/}
                                        <img
                                            src={url} // works directly since it's already a url (images were uploaded before)
                                            className="w-24 h-24 object-cover rounded-md border"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => removeExistingImage(index)} // triggers removeExistingImage() function which removes the url of the image from the form.gallery array
                                            className="absolute top-1 right-1 bg-black text-white rounded-full px-2 text-xs hover:scale-105" // absolute means -> “place me at the top-right of my parent”. It only works correct if the parent has position: relative
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}

                                {gallery.map((file, index) => ( // gallery is a state array of File objects, containing the newly added images (not the URLs) -> we use file and index
                                    <div key={`new-${index}`} className="relative"> {/* React needs unique keys across lists -> we add new- prefix for the keys of this list since we're using index in both lists */}
                                        <img
                                            src={URL.createObjectURL(file)} // images not uploaded yet and we don't have their URL so we must get it using URL.createObjectURL()
                                            className="w-24 h-24 object-cover rounded-md border"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => removeNewImage(index)} // removeNewImage() removes image File from gallery state array
                                            className="absolute top-1 right-1 bg-black text-white rounded-full px-2 text-xs hover:scale-105"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}

                            </div>
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