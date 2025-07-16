import { redirect } from "next/navigation";

export default function Home() {
  redirect("/notiktok");
  return null;
}
