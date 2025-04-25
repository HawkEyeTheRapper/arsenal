import React from 'react';
import Layout from '@/components/Layout';
import { useWPTheme } from '@/context/WPThemeContext';

export default function AdminConfigPage() {
  const { theme } = useWPTheme();

  return (
    <Layout>
      <div className={`min-h-screen px-6 py-10 text-white bg-black font-mono ${theme}`}>
        <h1 className="text-3xl font-bold mb-4 border-b border-accent-color pb-2">
          🛠️ Admin Configuration
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          This section is for managing your configuration settings for the Reincarnated Store.
        </p>

        <div className="space-y-6">
          <div className="bg-zinc-900 p-6 rounded shadow-md border border-gray-700">
            <h2 className="text-xl font-semibold text-primary-color mb-2">🔧 General Settings</h2>
            <p className="text-gray-400 text-sm">Placeholder for configurable settings.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded shadow-md border border-gray-700">
            <h2 className="text-xl font-semibold text-accent-color mb-2">🔒 Security & Access</h2>
            <p className="text-gray-400 text-sm">Future role settings, user controls, etc.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded shadow-md border border-gray-700">
            <h2 className="text-xl font-semibold text-highlight-color mb-2">🎨 Theme Debug</h2>
            <p className="text-gray-400 text-sm">Current theme: <strong>{theme}</strong></p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
