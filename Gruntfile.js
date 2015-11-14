/*
 * Grunt Script for Bootstrap Stylus
 * http://gruntjs.com/
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      options: {
        compress: false,
        paths: ['stylus'],
        sourcemap: {
          inline: true
        },
        urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
      },
      core: {
        files: {
          'dist/bootstrap.css': 'bootstrap/index.styl' // 1:1 compile
        }
      },

      theme: {
        files: {
          'dist/theme.css': 'bootstrap/theme.styl' // 1:1 compile
        }
      }
    },

    watch: {
      css: {
        files: 'bootstrap/**/*.styl',
        tasks: ['stylus'],
        options: {
          debounceDelay: 250
        }
      }
    },

    clean: {
      dist: ['dist/*.css', 'dist/*.js']
    },

    autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ],
        map: true
      },
      core: {
        src: 'dist/bootstrap.css'
      },
      theme: {
        src: 'dist/theme.css'
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        sourceMap: true,
        advanced: false
      },
      core: {
        files: {
          'dist/bootstrap.min.css': ['dist/bootstrap.css']
        }
      },
      theme: {
        files: {
          'dist/theme.min.css': ['dist/theme.css']
        }
      }
    },

    uglify: {
      options: {
        compress: {
          warnings: false
        },
        mangle: true,
        preserveComments: 'some',
        sourceMap: true
      },
      dist: {
        files: {
          'dist/bootstrap.min.js': [
            'js/transition.js',
            'js/alert.js',
            'js/button.js',
            'js/carousel.js',
            'js/collapse.js',
            'js/dropdown.js',
            'js/modal.js',
            'js/tooltip.js',
            'js/popover.js',
            'js/scrollspy.js',
            'js/tab.js',
            'js/affix.js'
          ]
        }
      }
    }

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('theme', ['stylus:theme', 'autoprefixer:theme', 'cssmin:theme']);
  grunt.registerTask('core', ['stylus:core', 'autoprefixer:core', 'cssmin:core'])
  grunt.registerTask('build', ['clean', 'core', 'theme', 'uglify']);
  grunt.registerTask('default', ['build']);
};
