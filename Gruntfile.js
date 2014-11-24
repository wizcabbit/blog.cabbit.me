module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: [
        '_site/*'
      ]
    },
    uglify: {
      js: {
        files: {
          '_site/all.min.js': [
            'lib/jquery/jquery.min.js',
            'lib/Han/han.min.js'
          ]
        }
      }
    },
    cssmin: {
      css: {
        files: {
          '_site/all.min.css': [
            'css/common.css',
            'css/index.css',
            'css/post.css',
            'lib/Han/han.min.css',
            'lib/prism/prism.css'
          ]
        }
      }
    },
    jekyll: {
      dest: "./_site"
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['clean', 'jekyll', 'uglify', 'cssmin']);
};
