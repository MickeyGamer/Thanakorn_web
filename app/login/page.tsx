"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 800));

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      window.location.href = "/dashboard"; 
    } else {
      alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      setIsLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 className="auth-title">เข้าสู่ระบบ</h2>
        <p className="auth-subtitle">Thanakorn Web</p>
        
        <div className="input-group">
          <label className="input-label">อีเมล</label>
          <input 
            className="input-field"
            type="email" 
            placeholder="name@example.com" 
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
            required 
            disabled={isLoading}
          />
        </div>

        <div className="input-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <label className="input-label">รหัสผ่าน</label>
             <Link href="/forgot-password" style={{ fontSize: '12px', color: '#71717a', textDecoration: 'none', marginBottom: '6px' }}>ลืมรหัสผ่าน?</Link>
          </div>
          <input 
            className="input-field"
            type="password" 
            placeholder="••••••••" 
            onChange={(e) => setForm({ ...form, password: e.target.value })} 
            required 
            disabled={isLoading}
          />
        </div>

        <button type="submit" className="btn-submit" disabled={isLoading}>
          {isLoading ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="spinner"></span> กำลังเข้าสู่ระบบ...
            </span>
          ) : (
            "เข้าสู่ระบบ"
          )}
        </button>
        
        <div className="auth-footer">
          <span>ยังไม่มีบัญชีใช่ไหม? </span>
          <Link href="/register" className="auth-link">สมัครสมาชิก</Link>
        </div>
      </form>
    </div>
  );
}