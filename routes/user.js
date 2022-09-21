// Requires
const { Router } = require('express');
const express  = require('express');

// Controllers
const {
    getSpecificUsers, postUser
} = require('../controllers/user');

// Initializing
const router = express.Router();

// Routes
// GET
router.get('/users', getSpecificUsers);

//
router.post('/users', postUser);

module.exports = router;