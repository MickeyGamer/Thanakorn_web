import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function Profile() {
  const user = await getSession();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="page">
      <div className="pos-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "12px", marginBottom: "20px", color: "#1e293b", fontWeight: "800" }}>
          ข้อมูลโปรไฟล์ผู้ใช้งาน
        </h2>
        
        <div style={{ marginBottom: "16px" }}>
          <span style={{ fontSize: "12px", color: "#64748b", display: "block", fontWeight: "600" }}>ชื่อบัญชีผู้ใช้</span>
          <span style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a" }}>{user.name as string}</span>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <span style={{ fontSize: "12px", color: "#64748b", display: "block", fontWeight: "600" }}>ระดับสิทธิ์ (Role)</span>
          <span style={{ fontSize: "16px", fontWeight: "700", color: "#3b82f6", textTransform: "uppercase" }}>{user.role as string || "USER"}</span>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <span style={{ fontSize: "12px", color: "#64748b", display: "block", fontWeight: "600" }}>ที่อยู่อีเมล</span>
          <span style={{ fontSize: "16px", color: "#0f172a" }}>{user.email as string}</span>
        </div>

        <div style={{ marginBottom: "8px" }}>
          <span style={{ fontSize: "12px", color: "#64748b", display: "block", fontWeight: "600" }}>สถาบันการศึกษา</span>
          <span style={{ fontSize: "16px", color: "#0f172a", fontWeight: "700" }}>โรงเรียนจิตรลดาวิชาชีพ</span>
        </div>
      </div>
    </div>
  );
}