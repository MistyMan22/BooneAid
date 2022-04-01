#! /usr/bin/env node

console.log('This script populates some sample resources to the database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Resource = require('./models/resource')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var resources = []

function resourceCreate(name, description, picture, link, email, phone, cb) {
  var resourceDetail = {name: name, description: description, picture: picture, link: link, email: email, phone: phone};
  var resource = new Resource(resourceDetail);
       
  resource.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Resource: ' + resource);
    resources.push(resource)
    cb(null, resource)
  }  );
}

/*
   name: {type: String, required: true, maxLength: 100},
    description: {type: String, required: true, maxLength: 10000},
    picture: {type: String, required: true},
    link: {type: String, required: true},
    email: {type: String, required: false},
    phone: {type: String, required: false},
*/

function createResources(cb) {
    async.series([
        function(callback) {
          resourceCreate("Crisis Center", 'Handles Crisis', 'Picture.jpg', 'boonecrisiscenter.org', 'crisis@crisiscenter.org', '828-654-8145', callback);
        },
        function(callback) {
          resourceCreate("Crisis Center1", 'Handles Crisis', 'Picture.jpg', 'boonecrisiscenter.org', 'crisis@crisiscenter.org', '828-654-8145', callback);
        },
        function(callback) {
          resourceCreate("Crisis Center2", 'Handles Crisis', 'Picture.jpg', 'boonecrisiscenter.org', 'crisis@crisiscenter.org', '828-654-8145', callback);
        },
        function(callback) {
          resourceCreate("Crisis Center3", 'Handles Crisis', 'Picture.jpg', 'boonecrisiscenter.org', 'crisis@crisiscenter.org', '828-654-8145', callback);
        },
        ],
        // optional callback
        cb);
}


async.series([
    createResources
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: ' + err);
    }
    else {
        console.log('BOOKInstances: ' + resources);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});




