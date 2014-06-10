module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
          banner: ['/**!',
            ' * @license <%= pkg.name %> v<%= pkg.version %>',
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>.',
            ' * License: <%= pkg.license %>',
            ' */\n'].join('\n')
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.js']
        }
      }
    },
    watch: {
      files: ['src/**/*.js.coffee'],
      tasks: ['build']
    },
    coffee: {
      compile: {
        files: {
          'src/<%= pkg.name %>.js': ['src/**/*.js.coffee']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('build', ['coffee', 'uglify', 'concat']);
}