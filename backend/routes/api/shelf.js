const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

const { Shelf } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


router.get('/', asyncHandler(async(req, res) => {
    const shelves = await Shelf.findAll()
    return res.json(shelves)
}))


module.exports = router;
