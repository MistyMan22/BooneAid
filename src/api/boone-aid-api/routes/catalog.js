var express = require('express');
var router = express.Router();

// Require controller modules.
var resource_controller = require('../controllers/resourceController');

/// RESOURCE ROUTES ///

// GET catalog home page.
router.get('/', resource_controller.index);

// GET request for creating a Resource. NOTE This must come before routes that display Resource (uses id).
router.get('/resource/create', resource_controller.resource_create_get);

// POST request for creating Resource.
router.post('/resource/create', resource_controller.resource_create_post);

// GET request to delete Resource.
router.get('/resource/:id/delete', resource_controller.resource_delete_get);

// POST request to delete Resource.
router.post('/resource/:id/delete', resource_controller.resource_delete_post);

// GET request to update Resource.
router.get('/resource/:id/update', resource_controller.resource_update_get);

// POST request to update Resource.
router.post('/resource/:id/update', resource_controller.resource_update_post);

// GET request for one Resource.
router.get('/resource/:id', resource_controller.resource_detail);

// GET request for list of all Resource items.
router.get('/resources', resource_controller.resource_list);


module.exports = router;