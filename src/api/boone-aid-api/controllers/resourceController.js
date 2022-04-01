var Resource = require('../models/resource');
var async = require('async');
const { body,validationResult } = require("express-validator");

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all Resources.
exports.resource_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Resource list');
};

// Display detail page for a specific Resource.
exports.resource_detail = function(req, res) {
    // Successful, so render.
    res.json({Jason: "json"});
};

// Display Resource create form on GET.
exports.resource_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Resource create GET');
};

// Handle Resource create on POST.
exports.resource_create_post = [

    // Validate and sanitize the name field.
  body('name', 'Resource name required').trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {

    // Extract the validation errors from a request.
    const errors = validationResult(req);

    let resource = new Resource(
        {
            name: req.body.name,
            description: req.body.description,
            picture: req.body.picture,
            link: req.body.link,
            email: req.body.email,
            phone: req.body.phone
        }
    );

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.send(errors.array());
      return;

    }
    else {
      // Data from form is valid.
      // Check if Genre with same name already exists.
      Resource.findOne({ 'name': req.body.name })
        .exec( function(err, found_resource) {
           if (err) { return next(err); }

           if (found_resource) {
             // Genre exists, redirect to its detail page.
             res.send("Resource exists already");
           }
           else {

             resource.save(function (err) {
               if (err) { return next(err); }
               // Resource saved
               res.send("resource saved successfully");
             });
           }
         });
    }
  }
];

// Display Resource delete form on GET.
exports.resource_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Resource delete GET');
};

// Handle Resource delete on POST.
exports.resource_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Resource delete POST');
};

// Display Resource update form on GET.
exports.resource_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Resource update GET');
};

// Handle Resource update on POST.
exports.resource_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Resource update POST');
};
