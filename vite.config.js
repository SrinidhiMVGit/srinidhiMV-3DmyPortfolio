import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/srinidhimv-portfolio-3d-website",
    plugins: [react()],
})