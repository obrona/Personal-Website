import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    flowbiteReact()
  ],
  server: {
    proxy: {
      "/api/leetcode": {
        target: "https://leetcode.com",
        changeOrigin: true,
        rewrite: () => "/graphql/",
        headers: {
          Referer: "https://leetcode.com/u/tl8772/",
        },
      },
    },
  },
})
