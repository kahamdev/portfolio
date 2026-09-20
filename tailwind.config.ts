import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#0a1323", navy: "#101e36", signal: "#16b8a6", mist: "#ecf3f7" }, boxShadow: { card: "0 18px 50px rgba(13, 34, 61, .10)" } } }, plugins: [] } satisfies Config;
