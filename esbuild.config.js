require('esbuild').build({
  entryPoints: ['app/javascript/packs/application.tsx'],
  bundle: true,
  outfile: 'public/packs/application.js',
});
