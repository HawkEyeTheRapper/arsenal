import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md border border-gray-700 bg-zinc-900 p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">🛡 Create Account</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm mb-1 text-gray-400">Username</label>
            <input type="text" id="username" className="w-full px-3 py-2 rounded bg-black border border-gray-600 text-white placeholder-gray-500" placeholder="hawk_ey3" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1 text-gray-400">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 rounded bg-black border border-gray-600 text-white placeholder-gray-500" placeholder="you@omniversalmail.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm mb-1 text-gray-400">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 rounded bg-black border border-gray-600 text-white placeholder-gray-500" />
          </div>
          <div>
            <label htmlFor="confirm" className="block text-sm mb-1 text-gray-400">Confirm Password</label>
            <input type="password" id="confirm" className="w-full px-3 py-2 rounded bg-black border border-gray-600 text-white placeholder-gray-500" />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 rounded mt-2">
            🚀 Register
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
