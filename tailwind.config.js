/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-grey": "#f0f0f0",
      },
      fontFamily: {
        regular: ["Regular"],
        suiss_Medium: ["suiss-medium"],
      },
      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "0.5rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem",
        40: "4rem",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
