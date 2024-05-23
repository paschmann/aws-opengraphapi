process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

'use strict';
var ogs = require('open-graph-scraper');

exports.handler = function (event, context, callback) {
    if (event.debug) {
      console.log('Received event:', JSON.stringify(event, null, 2));
      console.log('Context:', JSON.stringify(context));
    }

    ogs(event, function (err, results) {
        if (results) {
          callback(null, results);
        } else {
          callback(err);
        }
        if (event.debug) {
          console.log('err:', err); // This is returns true or false. True if there was a error. The error it self is inside the results object.
          console.log('results:', results);
        }
    });
};
