'use client'; // Required—Error components must run on the client

export default function Error({ error, reset }) {
  return (
    <div>
      <p className="text-red-600">Error: {error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
