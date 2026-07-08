export default function About() {
  return (
    <div className="page">
      <div className="pos-card" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", padding: "60px 20px" }}>
        <div style={{ width: "110px", height: "110px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", borderRadius: "50%", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "45px", boxShadow: "0 10px 25px rgba(59,130,246,0.3)" }}>
          👨‍💻
        </div>
        <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "12px", color: "#1e293b" }}>เกี่ยวกับผู้พัฒนา</h2>
        <p style={{ fontSize: "20px", color: "#3b82f6", fontWeight: "700", marginBottom: "8px" }}>นายธนกรณ์ รัศมีจันทร์</p>
        <p style={{ color: "#64748b", marginBottom: "32px", maxWidth: "550px", margin: "0 auto 32px", lineHeight: "1.6" }}>
          โปรเจกต์นี้จัดทำขึ้นเพื่อการศึกษาครับครู โดยใช้ สามสิ่งนี้
        </p>
        
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <span style={{ background: "#f1f5f9", padding: "8px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", color: "#334155" }}>🚀 Next.js</span>
          <span style={{ background: "#f1f5f9", padding: "8px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", color: "#334155" }}>🍃 MongoDB</span>
          <span style={{ background: "#f1f5f9", padding: "8px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", color: "#334155" }}>🎨 Modern CSS</span>
        </div>
      </div>
    </div>
  );
}