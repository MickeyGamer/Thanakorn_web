import { redirect } from "next/navigation"
import { getSession } from "@/lib/session";

export default async function Dashboard() {
  const user = await getSession();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="page">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1e293b", margin: 0 }}>Dashboard ระบบ</h2>
        <span style={{ background: "#dbeafe", color: "#1d4ed8", padding: "8px 16px", borderRadius: "20px", fontWeight: "700", fontSize: "14px", boxShadow: "0 2px 10px rgba(59,130,246,0.2)" }}>
          🟢 สถานะ: ออนไลน์
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
        
        <div className="pos-card" style={{ padding: "28px", marginBottom: "0", borderTop: "5px solid #3b82f6" }}>
          <p style={{ color: "#64748b", fontSize: "14px", fontWeight: "700", marginBottom: "8px" }}>👋 ยินดีต้อนรับ</p>
          <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", margin: 0 }}>{user.name as string}</h3>
        </div>

        <div className="pos-card" style={{ padding: "28px", marginBottom: "0", borderTop: "5px solid #8b5cf6" }}>
          <p style={{ color: "#64748b", fontSize: "14px", fontWeight: "700", marginBottom: "8px" }}>🔑 ระดับสิทธิ์</p>
          <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#6d28d9", margin: 0, textTransform: "uppercase" }}>{user.role as string || "User"}</h3>
        </div>

        <div className="pos-card" style={{ padding: "28px", marginBottom: "0", borderTop: "5px solid #ec4899" }}>
          <p style={{ color: "#64748b", fontSize: "14px", fontWeight: "700", marginBottom: "8px" }}>🏫 สถาบัน / องค์กร</p>
          <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#be185d", margin: 0 }}>โรงเรียนจิตรลดาวิชาชีพ</h3>
        </div>

      </div>
    </div>
  );
}