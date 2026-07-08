"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
    name: string;
    email: string;
    role: "admin" | "user";
};

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function loadUser() {
            try {
                const res = await fetch("/api/auth/me");
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                }
            } catch (error) {
                console.error("Failed to load user");
            }
        }
        loadUser();
    }, []);

    async function logout() {
        await fetch("/api/auth/logout", { method: "POST" });
        setUser(null);
        router.push("/login");
        router.refresh();
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link href="/" className="logo">Thanakorn shop</Link>

                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>

                    {user && (
                        <>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                            <li><Link href="/profile">Profile</Link></li>
                        </>
                    )}

                    {user?.role === "admin" && (
                        <li><Link href="/admin/users">Admin</Link></li>
                    )}

                    {!user ? (
                        <>
                            <li><Link href="/login">Login</Link></li>
                            <li><Link href="/register" className="btn-register">Register</Link></li>
                        </>
                    ) : (
                        <>
                            <li className="user-info">
                                ชื่อ: {user.name} | ระดับสิทธิ์: {user.role}
                            </li>
                            <li>
                                <button onClick={logout} className="btn-logout">Logout</button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}