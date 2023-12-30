import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;
  
	function toExit() {
	  if (server) server.kill();
	}
  
	return {
	  writeBundle() {
		if (server) return;
		server = exec('vite', {
		  stdio: ['ignore', 'inherit', 'inherit'],
		  shell: true
		});
  
		process.on('SIGTERM', toExit);
		process.on('exit', toExit);
	  }
	};
  }

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production
      }
    }),
    css({ output: 'bundle.css' }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
      exportConditions: ['svelte']
    }),
    commonjs(),
    json(),

    !production && serve(),

    !production && livereload('public'),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
