// http://localhost:3000/dashboard/1?lang=tamil
import { pause } from "@/lib/utils";
import Link from "next/link";

export default async function DashboardPage({ params, searchParams }) {
  await pause(4000)
  // const id = (await params).id;
  const { id } = await params;
  const { lang = "en" } = await searchParams;

  // throw new Error("Failed to load dashboard data");

  // For Client Component
  //  const { id } = use(params);
  // const { lang = "en" } = use(searchParams);
  return (
    <div className="flex flex-col items-center mt-10 space-y-4">
      <p className="text-2xl font-bold text-gray-800">
        Dashboard for User: {id} {lang}
      </p>
      <nav className="flex space-x-4">
        <Link href="/">
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
            Home
          </span>
        </Link>
        <Link href="/dashboard/1">
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
            Dashboard 1
          </span>
        </Link>
        <Link href="/dashboard/2" replace>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
            Dashboard 2
          </span>
        </Link>
        <Link href="/dashboard/3" replace>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
            Dashboard 3
          </span>
        </Link>
      </nav>
    </div>
  );
}
