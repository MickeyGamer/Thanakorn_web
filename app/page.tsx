import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <div className="pos-card" style={{ textAlign: "center", padding: "80px 20px", background: "linear-gradient(135deg, #ffffff, #eff6ff)" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "800", background: "linear-gradient(90deg, #1e3a8a, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "16px" }}>
          ยินดีต้อนรับสู่ Thanakorn Web
        </h1>
        <p style={{ color: "#64748b", fontSize: "18px", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          ระบบจัดการร้านค้าและโปรเจกต์เว็บแอปพลิเคชันสไตล์ Modern UI รวดเร็ว ปลอดภัย พัฒนาด้วย Next.js
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/login" style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)", color: "white", padding: "14px 28px", borderRadius: "8px", fontWeight: "700", textDecoration: "none", boxShadow: "0 4px 12px rgba(59,130,246,0.3)", transition: "all 0.2s" }}>
            เริ่มต้นใช้งาน
          </Link>
          <Link href="/about" style={{ background: "white", color: "#3b82f6", border: "2px solid #3b82f6", padding: "14px 28px", borderRadius: "8px", fontWeight: "700", textDecoration: "none" }}>
            เกี่ยวกับเรา
          </Link>
        </div>
      </div>
    </div>
  );
}