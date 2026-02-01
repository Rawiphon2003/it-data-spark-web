export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        techBlue: "#38BDF8",
        techBlueDark: "#0B1220",
        sparkGold: "#FACC15",
      },
      boxShadow: {
        glow: "0 0 25px rgba(56,189,248,0.35)",
        goldGlow: "0 0 25px rgba(250,204,21,0.45)",
      },
    },
  },
  plugins: [],
};
