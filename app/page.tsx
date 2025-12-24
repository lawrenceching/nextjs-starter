import { redirect } from "next/navigation";

export default function Home() {
  // Middleware handles locale detection; this is a deterministic fallback.
  redirect("/zh-CN");
}