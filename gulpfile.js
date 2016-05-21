var gulp          = require('gulp'),
    browserSync   = require('browser-sync'),      // Resync browser after change
    sass          = require('gulp-sass'),         // Compile SASS to CSS
    useref        = require('gulp-useref'),       // Compile JS & CSS files into one file
    gulpif        = require('gulp-if'),           // Conditional
    uglify        = require('gulp-uglify'),       // Minify JS files
    minifyCss     = require('gulp-minify-css'),   // Minify CSS files
    imagemin      = require('gulp-imagemin'),     // Minify images
    cache         = require('gulp-cache'),        // To cache the images
    del           = require('del'),               // Cleanup
    jshint        = require('gulp-jshint'),       // Linting
    stylish       = require('jshint-stylish'),    // Reporting for linting
    purify        = require('gulp-purifycss'),    // Purify Bootstrap
    git           = require('gulp-git'),          // Git commands
    runSequence   = require('run-sequence'),      // To run tasks in sequence
    inline = require('gulp-inline'),     
    karma = require('karma').server;

var jsFiles                 = ['client/app/*.js', 'client/app/**/*.js', 'client/app/**/**/*.js'],
    htmlFiles               = ['client/app/**/*.html', 'client/app/**/**/*.html'],
    allFiles                = jsFiles.concat(htmlFiles);

// ==================================
// Gulp watch - for development  ====
// ==================================

// Setup browserSync so we can automatically refresh browser
gulp.task('browserSync', function() {
  browserSync.init(null, {
    proxy: {
      target: 'localhost:5000',
      ws: true
    },
    open: false
  });
});

// Compile SASS files into CSS
gulp.task('sass', function() {
  return gulp.src('client/assets/styles/sass/*.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('client/assets/styles/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Watch changes and refresh browser
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('client/assets/styles/sass/*.scss', ['sass']); 
  gulp.watch(htmlFiles, browserSync.reload);
});


// =========================================
// Gulp build - prepare for deployment  ====
// =========================================

// Lint JS files
gulp.task('lint', function() {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

// Use useref to move JS & CSS files into one file each
gulp.task('useref', function() {
  return gulp.src('client/index.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('bootstrap.css', purify(allFiles)))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'));
});

// Use useref to move JS & CSS files into one file each
gulp.task('dev-src', function() {
  return gulp.src('client/index.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});


// Copy HTML files to Dist
gulp.task('copy-html', function() {
  return gulp.src(['client/app/**/*.html', 'client/app/**/**/*.html'], { 
    base: 'client'
  }).pipe(gulp.dest('dist'));
});

// Copy Bootstrap fonts to Dist
gulp.task('copy-fonts', function() {
  return gulp.src('client/bower_components/bootstrap/fonts/**')
  .pipe(gulp.dest('dist/assets/styles/fonts'));
});

// Minify images
gulp.task('images', function(){
  return gulp.src('client/assets/images/*.+(png|jpg|gif|svg|ico)')
  .pipe(cache(imagemin({
        interlaced: true
  })))
  .pipe(gulp.dest('dist/assets/images'));
});

// Cleanup Dist folder
gulp.task('clean', function(callback) {
  del('dist');
  return cache.clearAll(callback);
});

// Cleanup Dist folder but leave images
gulp.task('clean:dist', function(callback) {
  return del(['dist/**/*', '!dist/assets', '!dist/assets/**/*'], callback);
});

// Build task
gulp.task('build', function (callback) {
  runSequence('clean:dist', 'sass', 'lint', ['useref', 'copy-html', 'copy-fonts', 'images'], callback);
});

gulp.task('code',function(callback) {
  runSequence('clean:dist', 'sass', 'lint', ['useref', 'copy-html'], callback);
});

gulp.task('dev',function(callback) {
  runSequence('clean:dist', 'sass', 'lint', ['dev-src', 'copy-html'], callback);
});

// ===================
// Gulp deploy    ====
// ===================

// Add Dist to Git
gulp.task('add', function(){
  return gulp.src('./dist/*')
    .pipe(git.add());
});

// Commit addition
gulp.task('commit', function(){
  return gulp.src('./dist/*')
    .pipe(git.commit(['Adds dist']));
});

// Push to Heroku
gulp.task('push', function(){
  git.push('heroku', '+HEAD:master', function (err) {
    if (err) throw err;
  });
});

// Gulp deploy
gulp.task('deploy', function(callback) {
  runSequence('add', 'commit', 'push', callback);
});

gulp.task('inline', function(callback) {
  return gulp.src('dist/index.html')
  .pipe(inline({
    base: 'client/',
    js: uglify,
    css: minifyCss,
    disabledTypes: [],
    ignore: []
  }))
  .pipe(gulp.dest('dist/'));
});


