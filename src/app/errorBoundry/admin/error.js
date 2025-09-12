// app/admin/error.js
'use client';

export default function AdminError({ error, reset }) {
  return (
    <div>
      <h1>Something went wrong in Admin Page</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
