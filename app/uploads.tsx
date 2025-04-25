import { useState } from "react";

export default function AdminUploads() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2 tracking-widest">📤 Upload Panel</h1>
      <p className="text-gray-400 mb-4">Use this panel to upload new CSVs or assets to R2 for live sync.</p>

      <div className="border border-gray-700 rounded-lg p-6 bg-zinc-900 shadow-lg">
        <label className="block mb-2 font-semibold text-sm tracking-wide text-gray-300">Select File to Upload:</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-zinc-800 file:text-white hover:file:bg-zinc-700"
        />

        {file && (
          <div className="mt-4 text-green-400">
            ✅ Ready to upload: <span className="font-bold">{file.name}</span>
          </div>
        )}

        <p className="text-xs text-gray-500 mt-6">
          Upload target: <code className="bg-zinc-800 px-2 py-1 rounded">/omniversal-assets/src/data/</code> (CSV) or <code className="bg-zinc-800 px-2 py-1 rounded">/src/audio/</code> (media)
        </p>

        <p className="text-xs mt-2 text-yellow-400">
          Note: Upload functionality is frontend-only for now. Live R2 uploads require admin shell or API credentials.
        </p>
      </div>
    </div>
  );
}
