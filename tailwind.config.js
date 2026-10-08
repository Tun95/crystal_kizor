// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // These class names are built from data (domain ids), so Tailwind cannot see them
  safelist: [
    "blk--space",
    "blk--knowledge",
    "blk--people",
    "key--space",
    "key--knowledge",
    "key--people",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14214d", // adire indigo
        chalk: "#f2f3ef", // cool drawing-sheet white
        ochre: "#e0a526", // saffron signal
        mist: "#dde2f0", // indigo tint
        soft: "#4a5478", // secondary text
      },
      fontFamily: {
        display: ['"Familjen Grotesk Variable"', "system-ui", "sans-serif"],
        body: ['"Newsreader Variable"', "Georgia", "serif"],
      },
      screens: {
        "max-1200px": { max: "1200px" },
        "max-900px": { max: "900px" },
        "max-768px": { max: "768px" },
        "max-520px": { max: "520px" },
        "max-380px": { max: "380px" },
      },
    },
  },
  plugins: [],
};
