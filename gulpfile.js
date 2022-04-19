//! copyright SYS113 / 2022 - april

//? vars for gulp tasks
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

//? copy index.html and img dir to dist dir
gulp.task('copy-img-dir', () =>
  gulp.src('src/assets/img/*').pipe(gulp.dest('dist/assets/img/'))
);

//? copy index.html and img dir to dist dir
gulp.task('copy-html', () =>
  gulp.src('src/*.html').pipe(gulp.dest('dist/'))
);

//? add prefix and minify css
gulp.task('minify-css', () =>
  gulp.src('src/assets/css/*.css').pipe(autoprefixer({ cascade: false })).pipe(cleanCSS({ compatibility: 'ie8' })).pipe(gulp.dest('dist/assets/css/'))
);

//? minify js
gulp.task('minify-js', () =>
  gulp.src('src/assets/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/assets/js/'))
);

//? function for watch task
gulp.task('watch', () => {
  gulp.watch('src/assets/img/*', gulp.series('copy-img-dir'));
  gulp.watch('src/assets/js/*.js', gulp.series('minify-js'));
  gulp.watch('src/assets/css/*.css', gulp.series('minify-css'));
  gulp.watch('src/assets/*.html', gulp.series('copy-html'));
});

//? loop for tasks
gulp.task('default', gulp.parallel('minify-js', 'minify-css', 'copy-img-dir', 'copy-html', 'watch'));
