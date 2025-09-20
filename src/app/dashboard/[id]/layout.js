import { pause } from "@/lib/utils";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  const username = user?.name || "User";

  return {
    title: `${username}`,
    description: `This is the dashboard page for user ${username}`,
    openGraph: {
      title: `${username}`,
      description: `This is the dashboard page for user ${username}`,
      url: `https://yourdomain.com/dashboard/${id}`,
      siteName: "Your App Name",
      images: [
        {
          url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
          width: 800,
          height: 600,
          alt: `${username} profile`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
};

export default async function DashboardLayout({ children }) {
  await pause(2000)
  // throw new Error("Failed to load dashboard data");
  return <div className="p-8">{children}</div>;
}
