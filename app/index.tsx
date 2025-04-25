import Link from 'next/link';

const mockPosts = [
  { title: 'Welcome to the Resistance', slug: 'welcome' },
  { title: 'Max Spiers & The Hidden War', slug: 'max-spiers' },
  { title: 'Milabs & The Covert Agenda', slug: 'milabs-and-the-covert-agenda' },
  { title: 'The Montauk Project Files', slug: 'montauk-files' },
];

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 font-mono max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 border-b border-gray-700 pb-2 tracking-tight">
        📖 Lore & Drops
      </h1>
      <p className="text-gray-400 mb-6 text-sm">
        Decode the transmissions, one post at a time.
      </p>
      <ul className="space-y-6">
        {mockPosts.map((post) => (
          <li
            key={post.slug}
            className="bg-zinc-900 rounded-lg p-4 hover:bg-zinc-800 border border-gray-700 transition"
          >
            <Link href={`/posts/${post.slug}`} className="text-blue-400 hover:underline text-xl block">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              Read more about <span className="italic">{post.slug.replace(/-/g, ' ')}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
