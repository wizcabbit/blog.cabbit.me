module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      release: [
        '_site/*'
      ]
    },
    uglify: {
      release: {
        files: {
          '_site/all.min.js': [
            'lib/jquery/jquery.min.js',
            'lib/Han/han.min.js'
          ]
        }
      }
    },
    cssmin: {
      release: {
        files: {
          '_site/all.min.css': [
            'css/common.css',
            'css/index.css',
            'css/post.css',
            'lib/Han/han.min.css',
            'lib/prism/prism.css'
          ],
          '_site/nojquery.min.css': [
            'css/nojquery.css'
          ]
        }
      }
    },
    jekyll: {
      test: {
        options: {
          config: "./_config.yml"
        }
      },
      release: {
        options: {
          config: "./_config_release.yml"
        }
      }
    },
    'ftp-deploy': {
      deploy: {
        auth: {
          host: 'srv.cabbit.me',
          port: 21,
          authKey: 'www'
        },
        src: './_site',
        dest: './blog',
        exclusions: ['./**/.DS_Store', './**/.npm-debug.log']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-ftp-deploy');

  grunt.registerTask('default', ['jekyll:test']);
  grunt.registerTask('test', ['jekyll:test']);
  grunt.registerTask('release', ['clean:release', 'jekyll:release', 'uglify:release', 'cssmin:release']);
  grunt.registerTask('deploy', ['release', 'ftp-deploy:deploy']);
};
