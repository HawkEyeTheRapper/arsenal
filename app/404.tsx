import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 text-xs text-center text-gray-600 pt-4 tracking-widest opacity-20">
        // AETHERNET NODE DISCONNECTED
      </div>
      <div className="max-w-md border border-gray-700 bg-zinc-900 p-6 rounded shadow-lg z-10">
        <h1 className="text-5xl font-bold text-red-500 mb-4 animate-pulse">☠ 404</h1>
        <p className="text-lg text-gray-300 mb-2">This transmission could not be located.</p>
        <p className="text-sm text-gray-500 mb-6">File may have been scrambled or purged by an outside force.</p>
        <Link href="/" className="text-blue-400 hover:underline">
          🔁 Return to Reincarnated.Store
        </Link>
      </div>
    </div>
  );
}
