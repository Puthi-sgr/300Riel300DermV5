/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        eco: {
          50: "#f2f7f2",
          100: "#e6efe6",
          200: "#bfd6bf",
          300: "#99bd99",
          400: "#4d8b4d",
          500: "#005900",
          600: "#005000",
          700: "#004300",
          800: "#003500",
          900: "#002c00",
        },
        earth: {
          50: "#faf5f0",
          100: "#f5ebe1",
          200: "#e6cdb4",
          300: "#d7af87",
          400: "#ba742d",
          500: "#9c3900",
          600: "#8c3300",
          700: "#752b00",
          800: "#5e2200",
          900: "#4c1c00",
        },
      },
      backgroundImage: {
        "card-fern":
          "linear-gradient(135deg, #f0fbf4 0%, #dff3e8 48%, #cfe7d9 100%)",
        "card-grain":
          "linear-gradient(135deg, #f7faf7 0%, #edf2ea 48%, #dde6dc 100%)",
        "card-foam":
          "linear-gradient(135deg, #f5fdf9 0%, #fafcf7 45%, #e6f3ec 100%)",
        "card-mist":
          "linear-gradient(135deg, #eff6fc 0%, #e4f2ea 48%, #d3e6dc 100%)",
        "card-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.14) 42%, rgba(255,255,255,0.08) 100%)",
        "card-glass-emerald":
          "linear-gradient(135deg, rgba(16,185,129,0.16) 0%, rgba(255,255,255,0.18) 38%, rgba(255,255,255,0.1) 100%)",
        warn:
          "linear-gradient(135deg, rgba(248,113,113,0.12) 0%, rgba(255,255,255,0.28) 40%, rgba(255,255,255,0.14) 100%)",
        safe:
          "linear-gradient(225deg, rgba(16,185,129,0.14) 0%, rgba(255,255,255,0.28) 42%, rgba(255,255,255,0.14) 100%)",
        caution:
          "linear-gradient(135deg, rgba(234,179,8,0.16) 0%, rgba(255,255,255,0.28) 42%, rgba(255,255,255,0.14) 100%)",
        "btn-facebook":
          "linear-gradient(90deg, #1b74e4 0%, #1877f2 50%, #1464d4 100%)",
        "btn-eco":
          "linear-gradient(135deg, rgba(0,89,0,0.18) 0%, rgba(0,80,0,0.24) 45%, rgba(0,67,0,0.2) 100%)",
        "btn-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.22) 48%, rgba(255,255,255,0.14) 100%)",
      },
      boxShadow: {
        impact: "0 18px 48px rgba(0,0,0,0.12)",
        "impact-hover": "0 14px 24px rgba(0,0,0,0.16)",
        "btn-soft": "0 12px 24px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
