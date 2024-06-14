// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base:'/sales-Dashboard',
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:"/sales-Dashboard",
  plugins: [
    react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('chart.js') || id.includes('d3')) {
            return 'charting';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase this value if needed
  },
})
