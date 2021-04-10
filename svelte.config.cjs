const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');
const vercel = require('@sveltejs/adapter-vercel');
const mdsvex = require('mdsvex');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(
    { sass: { includePaths: ['src'] },
      mdsvex: {
        extension: '.svx', // the default is '.svexy', if you lack taste, you might want to change it
        parser: md => md.use(markdownit), // you can add markdown-it plugins if the feeling takes you
        markdownOptions: {
          typographer: true,
          linkify: true
        },
      },
  }),
  extensions: ['.svelte','.svx'],
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
			}
		}
	}
};

