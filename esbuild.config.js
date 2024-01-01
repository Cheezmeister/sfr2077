import { build } from 'esbuild';

build({
  entryPoints: ['app/javascript/packs/application.tsx'],
  bundle: true,
  watch: true,
  outfile: 'public/packs/application.js',
});
