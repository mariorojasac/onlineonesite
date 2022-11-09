module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ['"Roboto Slab"', "serif"],
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: () => ({
        "login-background":
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/AdobeStock_437713329.jpeg')",
        "landing-background":
          "url('/src/assets/img/AdobeStock_467589553.jpeg')",
        "profile-background":
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)),url('/src/assets/img/AdobeStock_437713329.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
