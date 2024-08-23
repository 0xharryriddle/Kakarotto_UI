import Image from "next/image";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Dashboard />
    </main>
  );
}
