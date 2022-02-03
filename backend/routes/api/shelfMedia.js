const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

const { Shelf, Media, ShelfMedia } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const shelfError = (message) => {
    const err = new Error(message);
    err.status = 401;
    err.title = 'failed';
    err.errors = [message];
    return err;
  };

  router.get('/', restoreUser, asyncHandler(async(req, res, next) => {
    const shelfMedia= await ShelfMedia.findAll()
    return res.json(shelfMedia)
}))

  router.get('/:id(\\d+)', restoreUser, asyncHandler(async(req, res, next) => {
    const shelf = await ShelfMedia.findByPk(req.params.id, {
      where: "shelfId",
    })
    return res.json(shelf)
  }))

  router.post('/', restoreUser, asyncHandler(async(req, res, next) => {
      const {mediaId, shelfId} = req.body
      const{user}= req
      if(!user){
        return next(noteError('Must be logged in to add to a shelf.'))
      }
      const shelfMedia= await ShelfMedia.create({userId: user.dataValues.id, mediaId, shelfId})
      return res.json(shelfMedia)
  }))

  module.exports = router;
