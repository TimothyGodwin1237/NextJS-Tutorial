// app/(SSRroutes)/page.jsx
async function fetchPosts() {
  console.log('Fetching posts at (default cache):', new Date().toISOString());
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function SSRPage() {
  const posts = await fetchPosts();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">SSR with Default Caching</h2>
      <p className="text-gray-600 mb-6">Check server console for fetch timestamps.</p>
      <ul className="space-y-4">
        {posts.slice(0, 3).map(post => (
          <li key={post.id} className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
