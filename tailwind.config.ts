// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#071A2B", // fundo muito escuro
          900: "#0A2540", // navy base
          800: "#0F355C",
          700: "#164B82",
          600: "#1E60D1", // azul de ação
          500: "#3776E7",
          100: "#EAF1FE",
        },
      },
      boxShadow: {
        soft: "0 6px 20px rgba(10,37,64,0.08)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
