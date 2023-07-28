/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#db2777",
        "primary-2": "#be185d",
        "primary-3": "#9d174d",
        "primary-4": "#831843",
        "secondary-1": "#475569",
        "secondary-2": "#334155",
        "secondary-3": "#1e293b",
        "secondary-4": "#0f172a",
        'text-color': '#1e293b',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
