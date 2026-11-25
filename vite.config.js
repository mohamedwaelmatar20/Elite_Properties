import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Elite_Properties/", // نفس اسم المستودع بالضبط
});
