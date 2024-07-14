// @ts-check
import reactPlugin from 'vite-plugin-react'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  define: {
    'process.env': {}
  }
}

export default config
