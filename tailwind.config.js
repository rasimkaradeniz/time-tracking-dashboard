module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myBlue: "hsl(246, 80%, 60%)",
        redWork: "hsl(15, 100%, 70%)",
        redStudy: "hsl(348, 100%, 68%)",
        bluePlay: "hsl(195, 74%, 62%)",
        exercise: "hsl(145, 58%, 55%)",
        social: "hsl(264, 64%, 52%)",
        selfcare: "hsl(43, 84%, 65%)",
        veryDarkBlue: "hsl(226, 43%, 10%)",
        darkBlue: "hsl(235, 46%, 20%)",
        desaturated: "hsl(235, 45%, 61%)",
        paleBlue: "hsl(236, 100%, 87%)",
      },
      screens: {
        xs: "375px",
        desk: "1024px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
