'use client'; // Required—Error components must run on the client

export default function Error({ error, reset }) {
  return (
    <div>
      <p className="text-red-600">Error in Main Route: {error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
