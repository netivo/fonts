let gulp = require("gulp");
let gulplog = require("gulplog");
let concat = require("gulp-concat-css");
let minify = require("gulp-clean-css");
let rename = require("gulp-rename");
let clean = require("gulp-clean");

let fs = require("fs");

let clearFonts = function(done){
    if(fs.existsSync('./dist/fonts')) {
        return gulp.src(['./dist/fonts'])
            .pipe(clean());
    }
    done();
};

let moveFonts = function(done){
    let fonts = process.env.npm_package_fonts;
    fonts = fonts.replace(/\s/g, '');
    fonts = fonts.split(',');
    fonts.forEach(item => {
        gulp.src(['./node_modules/@netivo/fonts/src/'+item+'/*', '!./node_modules/@netivo/fonts/src/'+item+'/*.css'])
            .pipe(gulp.dest('dist/fonts/'+item))
            .on('finish', function() {
                gulplog.info('Zakończono przenoszenie fonta: ' + item);
            });
    });
    done();
};

let compileCss = function(done) {
    let fonts = process.env.npm_package_fonts;
    fonts = fonts.replace(' ', '');
    fonts = fonts.split(',');
    let src = [];
    fonts.forEach(item => {
        src.push('./node_modules/@netivo/fonts/src/'+item+'/*.css');
    });
    if(src.length > 0) return gulp.src(src)
        .pipe(concat('fonts.css', {rebaseUrls: false}))
        .pipe(gulp.dest('./dist/fonts'))
        .pipe(rename('fonts.min.css'))
        .pipe(minify().on('error', gulplog.error))
        .pipe(gulp.dest('./dist/fonts'));
    done();
};

exports.fonts = gulp.series(clearFonts, gulp.parallel(moveFonts, compileCss));