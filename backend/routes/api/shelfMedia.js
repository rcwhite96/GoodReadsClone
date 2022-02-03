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
    const shelfMedia= await ShelfMedia.findAll({
      include: [{model: Shelf},
            {model: Media}]
            })
    return res.json(shelfMedia)
}))

  router.post('/', restoreUser, asyncHandler(async(req, res, next) => {
      const {mediaId, shelfId} = req.body
      console.log(req.body)
      console.log(shelfId)
      console.log(mediaId)
      console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
      const{user}= req
      if(!user){
        return next(noteError('Must be logged in to add to a shelf.'))
      }
      const shelfMedia= await ShelfMedia.create({userId: user.dataValues.id, mediaId, shelfId})
      return res.json(shelfMedia)
  }))

  module.exports = router;
