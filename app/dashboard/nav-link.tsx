"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const pathname = usePathname();

  return (
    <>
      <Link
        style={{ color: pathname === "/dashboard/customers" ? "blue" : "red" }}
        href="/dashboard/customers"
      >
        Customers
      </Link>

      <div
        onClick={() => {
          router.push("/dashboard/customers");
        }}
        style={{ color: pathname === "/dashboard/customers" ? "blue" : "red" }}
      >
        Customers
      </div>
    </>
  );
}
