const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');
const vercel = require('@sveltejs/adapter-vercel');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  compilerOptions: { generate: "ssr" },
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(
    { sass: { includePaths: ['src'] }
  }),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
      css: {
        postcss: {
          plugins: [
            require('autoprefixer')
          ]
        }
      }
		}
	}
};

