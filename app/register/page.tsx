"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setIsSuccess(true);
      
      setTimeout(() => {
        router.push("/login");
      }, 1500);
      
    } else {
      alert("การสมัครสมาชิกผิดพลาด โปรดลองใหม่อีกครั้ง");
      setIsLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 className="auth-title">สมัครสมาชิก</h2>
        <p className="auth-subtitle">สร้างบัญชีเพื่อใช้งานระบบ</p>
        
        <div className="input-group">
          <label className="input-label">ชื่อ-นามสกุล</label>
          <input className="input-field" type="text" placeholder="ชื่อ - นามสกุล" onChange={(e) => setForm({ ...form, name: e.target.value })} required disabled={isLoading || isSuccess}/>
        </div>

        <div className="input-group">
          <label className="input-label">อีเมล</label>
          <input className="input-field" type="email" placeholder="name@example.com" onChange={(e) => setForm({ ...form, email: e.target.value })} required disabled={isLoading || isSuccess}/>
        </div>
        
        <div className="input-group">
          <label className="input-label">รหัสผ่าน</label>
          <input className="input-field" type="password" placeholder="••••••••" onChange={(e) => setForm({ ...form, password: e.target.value })} required disabled={isLoading || isSuccess}/>
        </div>
        
        <div className="input-group">
          <label className="input-label">เบอร์โทรศัพท์ (ไม่บังคับ)</label>
          <input className="input-field" type="text" placeholder="08X-XXX-XXXX" onChange={(e) => setForm({ ...form, phone: e.target.value })} disabled={isLoading || isSuccess}/>
        </div>
        
        <button 
          type="submit" 
          className="btn-submit" 
          disabled={isLoading || isSuccess}
          style={isSuccess ? { background: "#10b981", color: "white", boxShadow: "0 4px 12px rgba(16, 185, 129, 0.4)" } : {}}
        >
          {isSuccess ? (
            "✅ สมัครสำเร็จ! กำลังไปหน้าล็อกอิน..."
          ) : isLoading ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="spinner"></span> กำลังสร้างบัญชี...
            </span>
          ) : (
            "ลงทะเบียน"
          )}
        </button>
        
        <div className="auth-footer">
          <span>มีบัญชีอยู่แล้ว? </span>
          <Link href="/login" className="auth-link">เข้าสู่ระบบที่นี่</Link>
        </div>
      </form>
    </div>
  );
}