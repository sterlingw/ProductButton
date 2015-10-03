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
        'bower_components/bootstrap/dist/js/bootstrap.js'
    ],
    vendorCss: [
        'bower_components/bootstrap/dist/css/bootstrap.css'
    ]
};