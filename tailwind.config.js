module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layout/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      colors: {
        darkSecondary: "#64FFDA",
      },
    },
  },
  variants: {
    extend: {},
  },
};
