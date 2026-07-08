import { redirect } from "next/navigation"
import { getSession } from "@/lib/session";

export default async function Dashboard() {

  const user = await getSession ();

  if (!user) {
    redirect("/login");
  }


  return (
    <div>

    <h2> Dashboard</h2>
    <p>Wellcome: {user.name as string} </p>
    <p>Role: {user.name as string} </p>
    <p>School: {user.school as string} </p>
    </div>

  );

}