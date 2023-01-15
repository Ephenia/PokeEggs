const { src, dest, series, watch } = require("gulp");
const concat = require('gulp-concat');

//Scripts
const jsMinify = require("gulp-terser");

function scripts() {
    return src('./build/**/*.js')
    .pipe(jsMinify())
    //.pipe(concat('pokeeggs.js'))
    .pipe(dest('./dist/'));
}

//Watch
function watchTask() {
    watch('./build/**/*.js',
     series(scripts));
}

exports.default = series(scripts, watchTask);