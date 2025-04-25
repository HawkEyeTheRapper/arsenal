import { useEffect, useState } from 'react';

type MusicTrack = {
  title: string;
  sku: string;
  category: string;
  audioUrl: string;
  image: string;
};

export default function AdminMusic() {
  const [tracks, setTracks] = useState<MusicTrack[]>([]);

  useEffect(() => {
    // Mock sample — replace with live fetch to your CSV/DB later
    setTracks([
      {
        title: "Behold A Pale Horse",
        sku: "HAWK-M-13",
        category: "Behold A Pale Horse",
        audioUrl: "https://74b94b7ffc15701b77e53f81bea03813.r2.cloudflarestorage.com/omniversal-assets/src/audio/Behold A Pale Horse.mp3",
        image: "https://74b94b7ffc15701b77e53f81bea03813.r2.cloudflarestorage.com/omniversal-assets/src/images/Album Art/HAWK-M-13_front.png"
      },
      {
        title: "K.T.",
        sku: "HAWK-SB-05",
        category: "Behold A Pale Horse",
        audioUrl: "https://74b94b7ffc15701b77e53f81bea03813.r2.cloudflarestorage.com/omniversal-assets/src/audio/K.T..mp3",
        image: "https://74b94b7ffc15701b77e53f81bea03813.r2.cloudflarestorage.com/omniversal-assets/src/images/Album Art/HAWK-SB-05_front.png"
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 tracking-widest">🎵 Music Catalog Admin</h1>
      <p className="text-gray-400 mb-6">Manage Hawk Eye's digital catalog via CSV and R2 bucket integrations.</p>

      <div className="overflow-x-auto border border-gray-700 rounded-lg">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-zinc-800 text-gray-300">
            <tr>
              <th className="px-4 py-2 border-b border-gray-600">Cover</th>
              <th className="px-4 py-2 border-b border-gray-600">Title</th>
              <th className="px-4 py-2 border-b border-gray-600">SKU</th>
              <th className="px-4 py-2 border-b border-gray-600">Category</th>
              <th className="px-4 py-2 border-b border-gray-600">R2 Audio URL</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <tr key={track.sku} className="border-b border-gray-800 hover:bg-zinc-800">
                <td className="px-4 py-2">
                  <img src={track.image} alt={track.title} className="w-16 h-16 object-cover border border-gray-600" />
                </td>
                <td className="px-4 py-2">{track.title}</td>
                <td className="px-4 py-2">{track.sku}</td>
                <td className="px-4 py-2">{track.category}</td>
                <td className="px-4 py-2">
                  <a href={track.audioUrl} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                    Audio
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
