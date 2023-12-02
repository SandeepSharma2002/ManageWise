export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 1px 5px rgba(168,85,247, 0.4), 0 0 1px 10px rgba(168,85,247, 0.1), 0 0 1px 15px rgba(168,85,247, 0.1)',
      },
    },
  },
  plugins: [],
}