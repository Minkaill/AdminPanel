import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      hooks: "/src/hooks",
      pages: "/src/pages",
      layout: "/src/layout",
      data: "/src/data",
      variables: "/src/assets/variables",
      store: "/src/store",
      paths: "/src/paths",
      routes: "/src/routes",
      actions: "/src/lib/actions"
    }
  }
})