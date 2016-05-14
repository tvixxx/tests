// Karma configuration
// Generated on Sat May 14 2016 12:10:15 GMT+0400 (RTZ 3 (зима))

module.exports = function(config) {
  config.set({

    frameworks: ['mocha'],

    $files: [
        'src/*.js',
        'tests/*-test.js',
      //{pattern: 'src/*.js', included: true},
      //{pattern: 'tests/*-test.js', included: true}
      {pattern: './src/*.js', included: true},
      {pattern: './tests/*.js', included: true}
        //"node_modules/karma-mocha/lib/adapter.js",
        //"node_modules/karma-mocha/lib/index.js",
        //"node_modules/mocha/mocha.js",
        //"node_modules/chai/chai.js"


    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    //logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
