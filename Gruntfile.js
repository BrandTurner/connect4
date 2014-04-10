// Gruntfile
// Grunt is a task runner for the front-end. It automates repitive tasks like minification, compilation, unit testing, linting
module.exports = function(grunt) {

	// Initializing the configuration object
	grunt.initConfig({
		// Task configuration
		// 3 tasks
		// 1 - Compile less files to css
		// 2 - minify and combine all js files into one
		// 3 - watch files for changes
		less: {
			development: {
				options: {
					compress: true,
				},
				files: {
					"./static/stylesheets/styles.css": "./assets/stylesheets/styles.less",
				}
			}
		},

		concat: {
			options: {
				separator: ';',
			},
			js: {
				src: [
				   './bower_components/jquery/dist/jquery.js',
          		   './bower_components/bootstrap/dist/js/bootstrap.js',
          		   './bower_components/alertify.js/lib/alertify.js',
          		   './assets/javascript/frontend.js'
				],
				dest: './static/javascript/frontend.js'
			},
		}, 

		watch: {
			js: {
				files: [
		      		'./bower_components/jquery/jquery.js',
		            './bower_components/bootstrap/dist/js/bootstrap.js',
		            './bower_components/alertify.js/lib/alertify.js',
		            './assets/javascript/frontend.js'
		        ],
        		tasks: ['concat:js']
			},
			less: {
				files: ['./assets/stylesheets/*.less'],
        		tasks: ['less']
			},
		}

		// Load npm plugins and register the default task

	
	});

	

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Define tasks
	grunt.registerTask('default', ['watch']);
}