module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    qunit: {
      files: ['./js-functions/**/index.html', './jquery-methods/**/index.html']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        globals: {
          'window': true,
          'document': true,
          'jQuery': true,
          'test': true,
          'equal': true,
          '$': true,
          'CanvasRenderingContext2D': true
        }
      },
      files: {
        src: ['./js-functions/**/*.js', './jquery-methods/**/*.js', './html5/**/*.js']
      }
    },
    uglify: {
      options: {
        banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      my_target: {
        files: {
          './js-functions/**/*.js': ['./src/wPaint.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [ 'qunit', 'jshint', 'uglify' ]);
};