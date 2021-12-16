const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

const { Review } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const reviewError = (message) => {
    const err = new Error(message);
    err.status = 401;
    err.title = 'failed';
    err.errors = [message];
    return err;
  };

  
  router.get('/', asyncHandler(async(req, res) => {
      const reviews = await Review.findAll()
      res.json(reviews)
  }))


  const validateReview = [
    check('title')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Your review must have a title')
      .isLength({ max: 50 })
      .withMessage('Title cannot be more than 50 characters long'),
    handleValidationErrors,
  ];


  router.post('/', restoreUser, validateReview, asyncHandler(async(req, res, next) => {
      const{title, content, mediaId} = req.body
      const{user} = req
      if(!user){
          return next(reviewError('Must be logged in to post a review.'))
      }
      const newReview = await Review.create({userId: user.dataValues.id, title, content, mediaId})
      return res.json(newReview)
  }))
