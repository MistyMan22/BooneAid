var Resource = require('../models/resource');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all Resources.
exports.resource_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Resource list');
};

// Display detail page for a specific Resource.
exports.resource_detail = function(req, res) {
    async.parallel({
        resource: function(callback) {
            Book.findById(req.params.id)
              .exec(callback);
        },
        resource_instance: function(callback) {

          BookInstance.find({ 'resource': req.params.id })
          .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.resource==null) { // No results.
            var err = new Error('Resource not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.json({Jason: "json"});
    });
};

// Display Resource create form on GET.
exports.resource_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Resource create GET');
};

// Handle Resource create on POST.
exports.resource_create_post = [
    // Convert the genre to an array.
    (req, res, next) => {
        if(!(req.body.genre instanceof Array)){
            if(typeof req.body.genre ==='undefined')
            req.body.genre = [];
            else
            req.body.genre = new Array(req.body.genre);
        }
        next();
    },

    // Validate and sanitize fields.
    body('title', 'Title must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('author', 'Author must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('summary', 'Summary must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('isbn', 'ISBN must not be empty').trim().isLength({ min: 1 }).escape(),
    body('genre.*').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a Book object with escaped and trimmed data.
        var book = new Book(
          { title: req.body.title,
            author: req.body.author,
            summary: req.body.summary,
            isbn: req.body.isbn,
            genre: req.body.genre
           });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.

            // Get all authors and genres for form.
            async.parallel({
                authors: function(callback) {
                    Author.find(callback);
                },
                genres: function(callback) {
                    Genre.find(callback);
                },
            }, function(err, results) {
                if (err) { return next(err); }

                // Mark our selected genres as checked.
                for (let i = 0; i < results.genres.length; i++) {
                    if (book.genre.indexOf(results.genres[i]._id) > -1) {
                        results.genres[i].checked='true';
                    }
                }
                res.render('book_form', { title: 'Create Book',authors:results.authors, genres:results.genres, book: book, errors: errors.array() });
            });
            return;
        }
        else {
            // Data from form is valid. Save book.
            book.save(function (err) {
                if (err) { return next(err); }
                   //successful - redirect to new book record.
                   res.redirect(book.url);
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
