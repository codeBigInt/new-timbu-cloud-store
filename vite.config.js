// @ts-check
import reactPlugin from 'vite-plugin-react'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }

}

export default config
