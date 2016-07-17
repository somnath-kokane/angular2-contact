'use strict';

System.defaultJSExtensions = true;

System.config({
  map: {
    app: 'src/app',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'html': 'node_modules/systemjs-plugin-text/text.js',
    'symbol-observable': 'node_modules/symbol-observable/lib/index.js'
  },
  packages: {
    'app': {defaultExtension: 'js', main: 'main.js'},
    'rxjs': {defaultExtension: 'js'},
    '@angular/core': {defaultExtension: 'js', main: '/bundles/core.umd.js'},
    '@angular/common': {defaultExtension: 'js', main: '/bundles/common.umd.js'},
    '@angular/compiler': {defaultExtension: 'js', main: '/bundles/compiler.umd.js'},
    '@angular/forms': {defaultExtension: 'js', main: '/bundles/forms.umd.js'},
    '@angular/http': {defaultExtension: 'js', main: '/bundles/http.umd.js'},
    '@angular/platform-browser': {defaultExtension: 'js', main: '/bundles/platform-browser.umd.js'},
    '@angular/platform-browser-dynamic': {defaultExtension: 'js', main: '/bundles/platform-browser-dynamic.umd.js'},
    '@angular/router': {defaultExtension: 'js', main:'/bundles/router.umd.js'}
  }
});
