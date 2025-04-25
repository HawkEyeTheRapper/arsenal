/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./public/wp-dos/**/*.{html,js,ts,jsx,tsx}", // ✅ for any theme HTML parts
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ for App Router compatibility, if used
  ],
  theme: {
    extend: {
      fontFamily: {
        dos: ['"JetBrains Mono"', 'monospace'],
        grotesk: ['"Overused Grotesk"', 'sans-serif'],
      },
      colors: {
        wp: {
          background: "#000000",
          border: "#4B5563",
          accent: "#1E40AF",
          error: "#DC2626",
          success: "#10B981",
          yellow: "#FBBF24",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
