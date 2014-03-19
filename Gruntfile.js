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
        paths: ['stylus'],
        urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
        use: [
          require('nib')
        ]
      },
      import: [
        'nib'
      ],
      files: {
        'dist/bootstrap.css': 'stylus/bootstrap.styl' // 1:1 compile
      }
    },

    theme: {
      options: {
        paths: ['stylus'],
        urlfunc: 'embedurl',
        use: [
          require('nib')
        ]
      },
      import: [
        'nib'
      ],
      files: {
        'dist/theme.css': 'stylus/theme.styl' // 1:1 compile
      }
    }
  },

  watch: {
    css: {
      files: 'stylus/*.styl',
      tasks: ['stylus'],
      options: {
        debounceDelay: 250
      }
    }
  },

  clean: {
    dist: ["dist/*.css", "dist/*.js"]
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
