export default function Contact() {
  return (
    <div className="page">
      <div className="pos-card" style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 30px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1e293b", marginBottom: "28px", textAlign: "center" }}>ช่องทางการติดต่อ</h2>
        
        <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", marginBottom: "16px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ fontSize: "32px" }}>🏫</div>
          <div>
            <p style={{ fontSize: "13px", color: "#64748b", fontWeight: "700", marginBottom: "4px" }}>สถาบันการศึกษา</p>
            <p style={{ fontSize: "16px", color: "#0f172a", fontWeight: "600" }}>โรงเรียนจิตรลดาวิชาชีพ<br/>สถาบันเทคโนโลยีจิตรลดา</p>
          </div>
        </div>

        <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", marginBottom: "24px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ fontSize: "32px" }}>👤</div>
          <div>
            <p style={{ fontSize: "13px", color: "#64748b", fontWeight: "700", marginBottom: "4px" }}>ผู้ดูแลระบบ</p>
            <p style={{ fontSize: "16px", color: "#0f172a", fontWeight: "600" }}>คุณ ธนกรณ์ รัศมีจันทร์</p>
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)", padding: "24px", borderRadius: "12px", color: "white", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 10px 25px rgba(59,130,246,0.3)" }}>
          <div style={{ fontSize: "32px" }}>📞</div>
          <div>
            <p style={{ fontSize: "14px", fontWeight: "600", opacity: "0.9", marginBottom: "4px" }}>เบอร์โทรศัพท์ติดต่อด่วน</p>
            <p style={{ fontSize: "26px", fontWeight: "800", letterSpacing: "1px" }}>012-345-6789</p>
          </div>
        </div>
      </div>
    </div>
  );
}