module.exports = {
    js: [
        'app/app.module.js',
        'app/templates.js',
        'app/app.config.js',
        '!app/**/*.spec.js',
        'app/**/*.js',
        '!app/**/**/*.spec.js',
        'app/**/**/*.js',
        '!app/**/**/**/*.spec.js',
        'app/**/**/**/*.js'
    ],
    css: [
        'css/*.css',
        'css/**/*.css',
        'css/**/**/*.css',
        'css/**/**/**/*.css'
    ],
    templates: [
        'app/**/*.html',
        'app/**/**/*.html',
        'app/**/**/**/*.html'
    ],
    vendorJs: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-growl-v2/build/angular-growl.js',
        'bower_components/angular-loading-bar/build/loading-bar.js',
        'bower_components/bootstrap/dist/js/bootstrap.js'
    ],
    vendorCss: [
        'bower_components/angular-loading-bar/build/loading-bar.css',
        'bower_components/angular-growl-v2/build/angular-growl.css',
        'bower_components/bootstrap/dist/css/bootstrap.css'
    ]
};