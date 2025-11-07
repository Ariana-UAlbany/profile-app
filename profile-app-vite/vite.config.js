import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/profile-app/'//set to repo name: https://github.com/Ariana-UAlbany/profile-app
})
