const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const rimraf = require('rimraf');
const uglifyes = require('gulp-uglify-es').default;
const svgSprite = require('gulp-svg-sprite');

const jsIndexFiles = ['./src/js/index/**/*.js', './src/js/main/**/*.js'];

const jsCatalogFiles = ['./src/js/index-catalog/**/*.js', './src/js/main/**/*.js'];

const cssIndexFiles = ['./src/css/index/**/*.css', './src/css/main/**/*.css'];

const cssCatalogFiles = ['./src/css/main/**/*.css', './src/css/index-catalog/**/*.css'];

const filesForDelete = ['./build'];

function stylesIndex() {
  return gulp
    .src(cssIndexFiles)
    .pipe(concat('main.min.css'))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

function stylesCatalog() {
  return gulp
    .src(cssCatalogFiles)
    .pipe(concat('main-catalog.min.css'))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

function scriptsIndex() {
  return gulp
    .src(jsIndexFiles)
    .pipe(concat('mainIndex.min.js'))
    .pipe(uglifyes())
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
}

function scriptsCatalog() {
  return gulp
    .src(jsCatalogFiles)
    .pipe(concat('mainCatalog.min.js'))
    .pipe(uglifyes())
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
}

function deleteFiles() {
  return gulp.src(filesForDelete, { read: false }).pipe(clean());
}

gulp.task('cleanFiles', deleteFiles);

gulp.task('deleteStyleFiles', function(cb) {
  rimraf('./build', cb);
});

gulp.task('svgSpriteCollect', function() {
  return gulp
    .src('./src/img/svg/**/*.svg')
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: 'sprite.svg',
          },
        },
      })
    )
    .pipe(gulp.dest('./build/svg/'));
});

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch(cssIndexFiles, stylesIndex);
  gulp.watch(cssCatalogFiles, stylesCatalog);
  gulp.watch('./src/js/index/**/*.js', scriptsIndex);
  gulp.watch('./src/js/index-catalog/**/*.js', scriptsCatalog);
  gulp.watch('./src/js/main/**/*.js', gulp.parallel(scriptsIndex, scriptsCatalog));
  gulp.watch('./*.html', browserSync.reload);
}

gulp.task('stylesIndex', stylesIndex);
gulp.task('stylesCatalog', stylesCatalog);
gulp.task('deleteFiles', deleteFiles);

gulp.task('watch', watch);
gulp.task('build', gulp.series('cleanFiles', gulp.parallel(scriptsIndex, scriptsCatalog, stylesIndex, stylesCatalog)));
gulp.task('dev', gulp.series('build', 'watch'));
