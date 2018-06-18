var gulp = require( 'gulp' ),
    concat = require( 'gulp-concat' ),
    pug = require( 'gulp-pug' ),
    sass = require( 'gulp-sass' ),
    rigger = require( 'gulp-rigger' ),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require( 'gulp-watch' );

gulp.task( 'sass', () => {
    const mask = './project/blocks/**/*.sass',
    run = () => gulp.src( mask )
        .pipe( concat( './build/css/style.sass' ) )
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({browsers: ['last 3 versions']}))
        .pipe( gulp.dest( './' ) );

    watch (mask, run );
    return run();
});

gulp.task( 'script', () => {
    const run = () => gulp.src( './project/js/script.js' )
        .pipe( rigger() )
        .pipe( gulp.dest( './build/js/' ) )

    watch ( './project/js/*.js', run );
    return run();
});

gulp.task( 'pug', () => {
    const mask = 'project/blocks/**/*.pug',
    run = () => gulp.src( './index.pug' )  
        .pipe( pug() )
        .pipe( gulp.dest('./') );
    
    watch(mask, run );
    watch('./index.pug', run );
    return run();
});

gulp.task('b:w', ['sass', 'pug' , 'script']);

