'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

function Modal({ children }) {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <div
      className="fixed inset-0 bg-blue-500 bg-opacity-75 flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-4 rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {children}
      </div>
    </div>
  );
}

export default function PhotoModal({ params }) {
  const { id } = React.use(params);
  const photoSrc = `https://picsum.photos/id/${parseInt(id) + 19}/600/400`;

  return (
    <Modal>
      <h2 className="text-3xl font-bold mb-4">Photo {id}</h2>
      <img src={photoSrc} alt={`Photo ${id}`} className="rounded max-w-full" />
    </Modal>
  );
}