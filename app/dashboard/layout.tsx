import SideNav from "./nav-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Layout",
  description: "This is the dashboard layout",
  keywords: ["dashboard"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <SideNav />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
