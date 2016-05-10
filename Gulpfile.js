var gulp = require('gulp');
var Server = require('karma').Server;
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var rename = require('gulp-rename');
var del = require('del');

//Temporary hack for running tasks sequentially. This will be fixed in gulp 4.0
//So this has to revisted in the future
var runSequence = require('run-sequence');

var paths = {
    public: {
        scripts: "/js/*.js",
        css: '/css/*.css',
        views: '/views/*.html',
    }
};

gulp.task('clean', function() {
    return del.sync('target/*');
});

gulp.task('test', function(done) {
    new Server({
        configFile: __dirname + '/test/' + 'karma.conf.js',
        singleRun: true
    }, done).start();
})

gulp.task('build', function(callback) {
    runSequence('test', callback);
})

gulp.task('build', function(callback) {
    runSequence('clean', 'build', callback);
})
gulp.task('default', ['build'])
