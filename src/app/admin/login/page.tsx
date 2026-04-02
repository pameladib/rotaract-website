"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setLoginForm({
            ...loginForm,
            [name]: value,
        });
    }

   async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(loginForm),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if(res.ok) {
            router.push("/admin");
        } else {
            toast.error("Invalid Credentials");
        }
    }

    return (
        <div className="bg-zinc-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8 space-y-4 m-20">

                <div className="text-center space-y-1">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Admin Login
                    </h1>
                    <p className="text-sm text-gray-500">
                        Enter your credentials to access the dashboard
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Email</label>
                        <Input
                            type="email"
                            name="email"
                            value={loginForm.email}
                            onChange={handleChange}
                            placeholder="admin@example.com"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Password</label>
                        <Input
                            type="password"
                            name="password"
                            value={loginForm.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <Button className="w-full mt-2">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
}