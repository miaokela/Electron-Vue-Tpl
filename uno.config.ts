import { defineConfig } from 'unocss'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  theme: {
    colors: {
      primary: '#0066ff',
      secondary: '#3d8bff',
      accent: '#ff4081',
      success: '#00c851',
      warning: '#ff8f00',
      error: '#ff4444',
    },
  },
  shortcuts: {
    'tech-card': 'bg-white rounded-lg shadow-sm border border-gray-200 p-4',
    'btn-primary': 'bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors',
    'btn-secondary': 'bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors',
  },
})