// app/(photos)/photo/[id]/page.jsx
import Link from 'next/link';

export default async function PhotoPage({ params }) {
  const { id } = await params;
  const photoSrc = `https://picsum.photos/id/${parseInt(id) + 19}/800/600`;

  return (
    <div className="container bg-red-400 mx-auto p-4 py-8 flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Photo {id}</h2>
        <img
          src={photoSrc}
          alt={`Photo ${id}`}
          className="max-w-full rounded"
        />
        <div className="mt-6">
          <Link href="/gallery" className="text-blue-600 hover:underline">
            ← Back to Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}