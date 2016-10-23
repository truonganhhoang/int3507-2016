'use strict';

module.exports = function(config) {
    config.set({

        basePath: '.',

        frameworks: ['jasmine'],

        files: [
            // Paths loaded by Karma
            {pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true},
            {pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true},
            {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true},
            {pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: true},
            {pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true},
            {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
            {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
            {pattern: 'karma-test-shim.js', included: true, watched: true},
            {pattern: 'bower_components/d3/d3.min.js', included: true, watched: false},
            /*{pattern: 'lib/js-expression-eval/parser.js', included: true, watched: false},
             {pattern: 'lib/jsep-0.3.0/jsep.js', included: true, watched: false},
             {pattern: 'lib/silentmatt/parser3.js', included: true, watched: false},*/

            // Paths loaded via module imports
            {pattern: 'app/**/*.js', included: false, watched: true},

            // Paths to support debugging with source maps in dev tools
            {pattern: 'app/**/*.ts', included: false, watched: true},
            {pattern: 'app/**/*.js.map', included: false, watched: false}
        ],

        // Proxied base paths
        proxies: {
            // Required for component assests fetched by Angular's compiler
            '/app/': '/base/app/'
        },

        port: 9876,

        logLevel: config.LOG_INFO,

        colors: true,

        autoWatch: true,

        //browsers: ['Firefox'],
        //browsers: ['Chrome'],
        browsers: ['Chrome'],

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher'
        ],

        // Coverage reporter generates the coverage
        reporters: ['progress', 'dots', 'coverage'],

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'dist/**/!(*spec).js': ['coverage']
        },

        coverageReporter: {
            reporters: [
                {type: 'json', subdir: '.', file: 'coverage-final.json'}
            ]
        },

        // This is the new content for your travis-ci configuration test
        //  Custom launcher for Travis-CI
        // See this link for more details:
        // http://stackoverflow.com/questions/19255976/how-to-make-travis-execute-angular-tests-on-chrome-please-set-env-variable-chr
        customLaunchers: {
            'Chrome_travis_ci': {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },

        singleRun: true
    });

    if (process.env.TRAVIS) {
        config.browsers = ['Chrome'];
    }
};