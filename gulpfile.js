const gulp = require('gulp'),
    rollup = require('rollup').rollup;
    minify = require('rollup-plugin-babel-minify');

gulp.task('build-min', () => {
    return rollup({
        input: './userscript-require.js',
        plugins: [minify()]
    }).then(bundle => {
        return bundle.write({
            file: 'userscript-require.min.js',
            format: 'es',
            sourcemap: false,
        });
    });
})
