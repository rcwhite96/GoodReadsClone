const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

const { Media, Review, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


router.get('/', asyncHandler(async(req, res) => {
    const media = await Media.findAll()
    return res.json(media)
}))


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const {id} = req.params
    const media = await Media.findByPk(id, {
        include: [{model: Review}]
    })
    return res.json(media)
}))



module.exports = router;
