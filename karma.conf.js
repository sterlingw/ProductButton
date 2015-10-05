module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher')
        ],
        files: [
            'bower_components/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'app/app.module.js',
            'spec/factories/*.js',
            'app/templates.js',
            'app/app.config.js',
            'app/**/*.js',
            'app/**/*.*.js',
            'app/**/**/*.js',
            'app/**/**/*.*.js'
        ]
    });
};