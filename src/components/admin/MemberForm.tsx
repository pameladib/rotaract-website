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
import { Division, Role } from "../../../generated/prisma/client";
import { uploadImage } from "@/lib/upload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
    initialData?: {
        id: number;
        name: string;
        role: Role;
        bio: string | null;
        occupation: string;
        division: Division;
        imageSrc: string;
    };
}

export default function MemberForm({ initialData }: Props) {
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [form, setForm] = useState({ // if initialData is defined, use its properties. If undefined, use empty strings ""
        name: initialData?.name || "",
        role: initialData?.role || "",
        bio: initialData?.bio || "",
        occupation: initialData?.occupation || "",
        division: initialData?.division || "",
        imageSrc: initialData?.imageSrc || "",
    });

    const divisionLabels = { // mapping object, we define it only because we care about human-readable labels
        BOARD: "Board", // if we didn't, we could use the Division enum that we imported from schema directly
        DIRECTORS: "Directors",
        MEMBERS: "Members",
        GUESTS: "Guests",
    };

    const roleLabels = {
        PRESIDENT: "President",
        VICE_PRESIDENT: "Vice President",
        SECRETARY: "Secretary",
        TREASURER: "Treasurer",
        SERGEANT_AT_ARMS: "Sergeant At Arms",
        IMMEDIATE_PAST_PRESIDENT: "Immediate Past President",
        ADVISOR: "Advisor",
        COMMUNITY_SERVICE_DIRECTOR: "Community Service Director",
        FINANCE_DIRECTOR: "Finance Director",
        INTERNATIONAL_UNDERSTANDING_DIRECTOR: "International Understanding Director",
        PROFESSIONAL_DEVELOPMENT_DIRECTOR: "Professional Development Director",
        CLUB_SERVICE_DIRECTOR: "Club Service Director",
        PUBLIC_IMAGE_DIRECTOR: "Public Image Director",
        MEMBER: "Member",
        GUEST: "Guest"
    };

    const isEdit = !!initialData; // !! converts initialData into a boolean. If initialData is defined -> true, else false
    const buttonLabel = isEdit ? "Update Member" : "Add Member";
    const url = isEdit ? `/api/members/${initialData.id}` : "/api/members";

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
                const message = isEdit ? "Member Updated successfully" : "Member created successfully";
                toast.success(message);

                // reset form on create
                if (!isEdit) {
                    setForm({
                        name: "",
                        role: "",
                        bio: "",
                        occupation: "",
                        division: "",
                        imageSrc: ""
                    });

                    setFile(null);

                }
                router.push("/admin/members");

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
                    {isEdit ? "Update Member" : "Add New Member"}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Name</label>
                        <Input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter name" required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Role</label>
                        <Select
                            value={form.role}
                            onValueChange={(value) =>
                                setForm({ ...form, role: value })
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Role" />
                            </SelectTrigger>

                            <SelectContent>
                                {Object.keys(roleLabels).map((role) => (
                                    <SelectItem key={role} value={role}>
                                        {roleLabels[role as Role]}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Occupation</label>
                        <Input
                            name="occupation"
                            value={form.occupation}
                            onChange={handleChange}
                            placeholder="Enter occupation" required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Bio</label>
                        <Textarea
                            name="bio"
                            value={form.bio}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Short bio..."
                        />
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