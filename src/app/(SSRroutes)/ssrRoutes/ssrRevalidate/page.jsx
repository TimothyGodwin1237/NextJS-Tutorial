// app/(SSRroutes)/revalidate.jsx
async function fetchPosts() {
  console.log('Fetching posts at (ISR with revalidate):', new Date().toISOString());
  const res = await fetch('https://jsonplaceholder.typicode.com/comments', { next: { revalidate: 10 } });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function ISRPage() {
  const posts = await fetchPosts();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">SSR with ISR (revalidate 10s)</h2>
      <p className="text-gray-600 mb-6">Check server console for fetch timestamps.</p>
      <ul className="space-y-4">
        {posts.slice(0, 3).map(post => (
          <li key={post.id} className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold">{post.name}</h3>
             <p className="text-gray-700">{post.email}</p>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
