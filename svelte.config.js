/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

const config = {
  compilerOptions: { generate: "ssr" },
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(
    { sass: { includePaths: ['src'] }
  }),
  kit: {
    target: '#svelte',
    adapter: vercel(),

    vite: {
      ssr: {
        noExternal: []
      },
      optimizeDeps: {
        include: ['layercake']
      },
      css: {
        postcss: {}
      }
    }
  }
};

export default config;