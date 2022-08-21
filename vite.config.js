import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
  ssr: {
    noExternal: []
  },
  optimizeDeps: {
    include: ['layercake']
  },
  css: {
    postcss: {}
  }
};

export default config;


 