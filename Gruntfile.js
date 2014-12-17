/*
 * Grunt Script for Bootstrap Stylus
 * http://gruntjs.com/
 */

'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

  stylus: {
    bootstrap: {
      options: {
        paths: ['bootstrap-stylus/bootstrap'],
        urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
      },
      files: {
        'dist/bootstrap.css': 'bootstrap-stylus/bootstrap/bootstrap.styl' // 1:1 compile
      }
    },

    theme: {
      options: {
        paths: ['bootstrap-stylus/bootstrap'],
        urlfunc: 'embedurl',
      },
      files: {
        'dist/theme.css': 'bootstrap-stylus/bootstrap/theme.styl' // 1:1 compile
      }
    }
  },

  watch: {
    css: {
      files: 'bootstrap-stylus/bootstrap/**/*.styl',
      tasks: ['stylus'],
      options: {
        debounceDelay: 250
      }
    }
  },

  clean: {
    dist: ["dist/*.css", "dist/*.js"]
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
      ]
    },
    core: {
      options: {
        map: true
      },
      src: 'dist/bootstrap.css'
    },
    theme: {
      options: {
        map: true
      },
      src: 'dist/theme.css'
    }
  },

  cssmin: {
    bootstrap: {
      files: {
        "dist/bootstrap.min.css": ["dist/bootstrap.css"]
      }
    },
    theme: {
      files: {
        "dist/theme.min.css": ["dist/theme.css"]
      }
    }
  },

  uglify: {
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
  },

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('dist', ['clean','stylus:bootstrap', 'cssmin:bootstrap', 'uglify']);
  grunt.registerTask('theme', ['stylus:theme', 'cssmin:theme']);
  grunt.registerTask('build', ['clean','stylus:bootstrap', 'stylus:theme', 'cssmin:bootstrap', 'cssmin:theme', 'uglify']);
};
