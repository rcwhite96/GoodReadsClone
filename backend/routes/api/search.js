const express = require('express');
const asyncHandler = require('express-async-handler');
const { Op } = require('sequelize');

const { Media } = require('../../db/models');

const router = express.Router();

const searchError = (message) => {
    const error = new Error(message)
    error.status = 401
    error.title = 'Search failed.'
    error.errors = [message]
    return err
}

async function searchMedia(term){
    const media = await Media.findAll({
        where: {
            title: {[Op.iLike]: `%${term}%`}
        }
    })
    return media
}

router.get('/:searchTerm', asyncHandler(async(req, res) => {
    const data = req.params.searchTerm
    const media = await searchMedia(data)
    return res.json(media)
}))

module.exports = router;
