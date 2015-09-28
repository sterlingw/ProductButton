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
            'app/**/*.js',
            'app/**/*.*.js',
            'app/**/**/*.js',
            'app/**/**/*.*.js'
        ]
    });
};