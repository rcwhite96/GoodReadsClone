const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

const { Media, Review, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const mediaError = (message) => {
    const err = new Error(message);
    err.status = 401;
    err.title = 'failed';
    err.errors = [message];
    return err;
  };

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

const validateMedia = [
    check('title')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Your media must have a title')
      .isLength({ max: 50 })
      .withMessage('Title cannot be more than 50 characters long'),
    handleValidationErrors,
  ];

router.post('/', restoreUser, validateMedia, asyncHandler(async(req, res, next) => {
    const{imageURL, title, creator, mediaType, description} = req.body
    const{user} = req

    if(!user){
        return next(mediaError('Must be logged in to post media.'))
    }
    const newMedia = await Media.create({userId: user.dataValues.id, imageURL, title, creator, mediaType, description})
    return res.json(newMedia)
}))

router.put('/:id(\\d+)', restoreUser, validateMedia, asyncHandler(async(req, res, next) => {
    const mediaUpdate = await Media.findByPk(req.params.id);
    const {imageURL, title, creator, mediaType, description} = req.body
    const{user} = req
      if(!user){
          return next(mediaError('Must be logged in to edit a review.'))
      }
      const media = {userId: user.dataValues.id, imageURL, title, creator, mediaType, description}
      await mediaUpdate.update(media)
      return res.json(mediaUpdate)
    }))

router.delete('/:id(\\d+)', restoreUser, asyncHandler(async(req, res, next) => {
    const {user} = req
      if(!user){
          return next(mediaError('you must be logged in to delete a review.'))
      }
      const media = await Media.findByPk(req.params.id)
      await media.destroy()
      return res.json({message: 'Media successfully deleted.' })
  }))

module.exports = router;
