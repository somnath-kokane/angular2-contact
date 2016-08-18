
const map: any = {
  'main': 'main.js',
  'app':'app',
  'contact': 'app/contact',
  'html': 'systemjs-plugin-text/text.js',
  'symbol-observable': 'symbol-observable/lib/index.js'
};

const packages: any = {
  'app': {defaultExtension: 'js', main: 'index.js'},
  'rxjs': {defaultExtension: 'js'}
};

const barrels: string[] = [
  'core',
  'common',
  'compiler',
  'forms',
  'http',
  'router',
  'platform-browser',
  'platform-browser-dynamic'
];

barrels.forEach((name: string) => {
  packages[`@angular/${name}`] = {defaultExtension: 'js', main: `/bundles/${name}.umd.js`}
})


const config: any = {
  map: map,
  packages: packages
}

System.defaultJSExtensions = true;
System.config(config);