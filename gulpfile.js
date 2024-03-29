var gulp = require('gulp');
var paths = require('./paths.js');


gulp.task('test', function(done){
    var KarmaServer = require('karma').Server;
    var server = new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
    server.start()
});

gulp.task('tdd', function(done){
    var KarmaServer = require('karma').Server;
    var server = new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false,
        autoWatch: true
    }, done);
    server.start()
});

gulp.task('compile-templates', function() {
    var templateCache = require('gulp-angular-templatecache');
    return gulp.src(paths.templates)
        .pipe(templateCache())
        .pipe(gulp.dest('app/'));
});

gulp.task('compile-js', function() {
    var sourcemaps = require('gulp-sourcemaps');
    var ngAnnotate = require('gulp-ng-annotate');
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(uglify())
        .pipe(gulp.dest('public/js/'));
});

gulp.task('compile-vendor-js', function() {
    var sourcemaps = require('gulp-sourcemaps');
    var concat = require('gulp-concat');
    return gulp.src(paths.vendorJs)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js/'));
});

gulp.task('compile-css', function() {
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');
    var precss = require('precss');
    var cssnano = require('cssnano');
    return gulp.src(paths.css)
        .pipe(postcss([
            precss,
            autoprefixer,
            cssnano
        ]))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('compile-vendor-css', function() {
    var concat = require('gulp-concat');
    var sourcemaps = require('gulp-sourcemaps');
    return gulp.src(paths.vendorCss)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.templates, ['compile-templates']);
    gulp.watch(paths.vendorJs, ['compile-vendor-js']);
    gulp.watch(paths.js, ['compile-js']);
    gulp.watch(paths.vendorCss, ['compile-vendor-css']);
    gulp.watch(paths.css, ['compile-css']);
});

gulp.task('build', ['compile-templates', 'compile-vendor-js', 'compile-js', 'compile-vendor-css', 'compile-css']);
