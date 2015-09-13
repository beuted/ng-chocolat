module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');

    var pkg = grunt.file.readJSON("package.json");

    grunt.initConfig({
        pkg: pkg,

        uglify: {
            options: {
                mangle: true
            },
            release: {
                files: {
                    'dist/ng-chocolat.min.js': ['src/ng-chocolat.js']
                }
            }
        },
    });

    grunt.registerTask('release', [
        'uglify:release',
    ]);

}
