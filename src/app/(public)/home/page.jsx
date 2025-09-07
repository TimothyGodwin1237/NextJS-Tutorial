'use client'
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">home page with group routes</h1>
      <button onClick={() => router.push('/dashboard/tutorial')}>Navigate to dahboard</button>
    </main >
  );
}
