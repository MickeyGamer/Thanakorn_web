import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function AdminUser() {
  const user = await getSession();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div >
      <h2>หน้าเมนู Admin</h2>
      <p> เมนูลับเฉพาะ Admin เท่านั้น  </p>
 
    </div>
  );
}