import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import Link from "next/link";

export default async function AdminUsersPage() {
  const user = await getSession();

  // 1. 🛑 ดักคนยังไม่ล็อกอิน ให้ไปหน้า Login
  if (!user) {
    redirect("/login");
  }

  // 2. 🛑 ดักคนที่เป็นแค่ User ธรรมดา (ไม่ใช่ Admin) ให้เด้งกลับไปหน้า Dashboard
  if (user.role !== "admin") {
    redirect("/dashboard");
  }

  // 👇 ถ้าผ่าน 2 ด่านบนมาได้ แปลว่าเป็น Admin ของแท้! จะเห็นโค้ดด้านล่างนี้
  return (
    <div className="page">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1e293b", margin: 0 }}>
            แผงควบคุมสำหรับ Admin 👑
          </h2>
          <p style={{ color: "#64748b", marginTop: "8px" }}>จัดการข้อมูลผู้ใช้งานทั้งหมดในระบบ</p>
        </div>
        <Link href="/dashboard" style={{ background: "#f1f5f9", color: "#475569", padding: "10px 20px", borderRadius: "8px", fontWeight: "700", textDecoration: "none", border: "1px solid #e2e8f0" }}>
          กลับหน้า Dashboard
        </Link>
      </div>

      <div className="pos-card" style={{ padding: "0", overflow: "hidden" }}>
        {/* หัวตาราง */}
        <div style={{ background: "#f8fafc", padding: "16px 24px", borderBottom: "1px solid #e2e8f0", display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr", fontWeight: "700", color: "#475569", fontSize: "14px" }}>
          <div>ชื่อ-นามสกุล</div>
          <div>อีเมล</div>
          <div>สิทธิ์</div>
          <div style={{ textAlign: "right" }}>จัดการ</div>
        </div>

        {/* ข้อมูลจำลอง (Mock Data) สไตล์ตารางมินิมอล */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid #f1f5f9", display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr", alignItems: "center", fontSize: "14px" }}>
          <div style={{ fontWeight: "600", color: "#0f172a" }}>{user.name as string} (คุณ)</div>
          <div style={{ color: "#64748b" }}>{user.email as string}</div>
          <div>
            <span style={{ background: "#dbeafe", color: "#1d4ed8", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "700" }}>
              ADMIN
            </span>
          </div>
          <div style={{ textAlign: "right" }}>
            <button disabled style={{ background: "#e2e8f0", color: "#94a3b8", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "not-allowed" }}>ล็อก</button>
          </div>
        </div>
      </div>
    </div>
  );
}