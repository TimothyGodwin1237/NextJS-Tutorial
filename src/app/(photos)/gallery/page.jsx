// app/(photos)/gallery/page.jsx
import Link from 'next/link';

// Dummy data for our photos
const photos = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/id/${i + 20}/400/400`,
}));

export default function GalleryPage() {
  return (
    <div className="container mx-auto p-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Link key={photo.id} href={`/photo/${photo.id}`} scroll={false}>
            <img
              src={photo.src}
              alt={`Photo ${photo.id}`}
              className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}