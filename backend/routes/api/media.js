const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

const { Media } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


router.get('/', asyncHandler(async(req, res) => {
    const media = await Media.findAll()
    // console.log(res.json(media))
    return res.json(media)
}))


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const media = await Media.findByPk(req.params.id)
    return res.json(media)
}))

module.exports = router;
