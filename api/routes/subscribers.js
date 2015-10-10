/**
 * Subscriber router.
 *
 * @summary
 *  subscriber.create()
 *  subscriber.update()
 *  subscriber.delete()
 *  subscriber.fetchOne()
 *  subscriber.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('anwani-api:subscriber-router');

var subscriberController  = require('../controllers/subscriber');
var authController  = require('../controllers/auth');

var router  = express.Router();

/**
 * @api {post} /subscribers/signup Create a subscriber
 * @apiVersion 1.0.0
 * @apiName Signup
 * @apiGroup Subscriber
 *
 * @apiDescription Create a new subscriber. This Content should be submitted as
 * ```multipart/form-data```.
 *
 * @apiParam {String} name name of the subscriber
 * @apiParam {String} address subscriber address
 * @apiParam {String} email email address
 * @apiParam {String} website subscriber website
 * @apiParam {String} password secret password
 * @apiParam {String} logo subscriber logo
 *
 * @apiParamExample Request Example, should be submitted as```multipart/form-data```.
 *  {
 *    "email": "subscriber@email.com",
 *    "password": "password",
 *    "name": "Jumia Online Shop",
 *    "website": "http://www.jumia.co.ke",
 *    "address": "Moi Avenue, Top House",
 *    "logo": "<LOGO_DATA>"
 *  }
 *
 * @apiSuccess {String} name name of the subscriber
 * @apiSuccess {String} address subscriber address
 * @apiSuccess {String} email email address
 * @apiSuccess {String} website subscriber website
 * @apiSuccess {String} password secret password
 * @apiSuccess {String} logo subscriber logo
 * @apiSuccess {String} _id subscriber id
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    "email": "subscriber@email.com",
 *    "name": "Jumia Online Shop",
 *    "website": "http://www.jumia.co.ke",
 *    "address": "Moi Avenue, Top House",
 *    "logo": "logo_url"
 *  }
 *
 */
router.post('/signup', subscriberController.create);

/**
 * @api {post} /subscribers/login Login a subscriber
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup Subscriber
 *
 * @apiDescription Log in a subscriber. The request returns a token used to authentication
 * of the subscriber on subsequent requests. The token is placed as an HTTP header ie
 * ```Authorization: Bearer <Token-here>``` otherwise requests are rejected.
 *
 * @apiParam {String} email subscriber email address
 * @apiParam {String} password Password/Pin
 *
 * @apiParamExample Request Example:
 *  {
 *    "email": "subscriber@email.com",
 *    "password": "password"
 *  }
 *
 * @apiSuccess {String} token auth token
 * @apiSuccess {Object} subscriber subscriber info
 * @apiSuccess {String} subscriber._id subscriber id
 * @apiSuccess {String} subscriber.first_name first name
 * @apiSuccess {String} subscriber.last_name last name
 * @apiSuccess {String} subscriber.other_name other names
 * @apiSuccess {String} subscriber.phone_number phone number
 * @apiSuccess {Array} subscriber.addresses addresses
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "token" : "ylHUMaVrS0dpcO/+nT+6aAVVGcRJzu=",
 *    "subscriber": {
 *      "_id" : "556e1174a8952c9521286a60",
 *      "email": "subscriber@email.com",
 *      "name": "Jumia Online Shop",
 *      "website": "http://www.jumia.co.ke",
 *      "address": "Moi Avenue, Top House",
 *      "logo": "logo_url"
 *    }
 *  }
 *
 */
router.post('/login', authController.subscriberLogin);

/**
 * @api {post} /subscribers/logout Logout a subscriber
 * @apiVersion 1.0.0
 * @apiName Logout
 * @apiGroup Subscriber
 *
 * @apiDescription Invalidate a subscribers token
 *
 * @apiSuccess {Boolean} logged_out message
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "logged_out" : true
 *  }
 *
 */
router.post('/logout', authController.logoutSubscriber);

/**
 * @api {get} /subscribers/verify/:token Verify a user/subscriber
 * @apiVersion 1.0.0
 * @apiName Verify
 * @apiGroup Subscriber
 *
 * @apiDescription Verify a user/subscriber
 *
 * @apiSuccess {Boolean} verified verified or not
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "verified" : true
 *  }
 *
 */
router.get('/verify/:token', authController.verify);

/**
 * @api {get} /subscribers/:id Get Subscriber
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Subscriber
 *
 * @apiDescription Get a subscriber with the given id
 *
 */
router.get('/:id', subscriberController.fetchOne);

/**
 * @api {put} /subscribers/:id Update Subscriber
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup Subscriber
 *
 * @apiDescription Update a subscriber with the given id
 *
 * @apiSuccess {String} name name of the subscriber
 * @apiSuccess {String} address subscriber address
 * @apiSuccess {String} email email address
 * @apiSuccess {String} website subscriber website
 * @apiSuccess {String} password secret password
 * @apiSuccess {String} logo subscriber logo
 * @apiSuccess {String} _id subscriber id
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    "email": "subscriber@email.com",
 *    "name": "Jumia Online Shop",
 *    "website": "http://www.jumia.co.ke",
 *    "address": "Moi Avenue, Top House",
 *    "logo": "logo_url"
 *  }
 *
 */
router.put('/:id', subscriberController.update);

/**
 * @api {get} /subscribers Get subscribers collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup Subscriber
 *
 * @apiDescription Get a collection of subscribers
 *
 * @apiSuccess {String} name name of the subscriber
 * @apiSuccess {String} address subscriber address
 * @apiSuccess {String} email email address
 * @apiSuccess {String} website subscriber website
 * @apiSuccess {String} password secret password
 * @apiSuccess {String} logo subscriber logo
 * @apiSuccess {String} _id subscriber id
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60",
 *    "email": "subscriber@email.com",
 *    "name": "Jumia Online Shop",
 *    "website": "http://www.jumia.co.ke",
 *    "address": "Moi Avenue, Top House",
 *    "logo": "logo_url"
 *  }]
 *
 */
router.get('/', subscriberController.fetchAll);

/**
 * @api {delete} /subscribers/:id Delete Subscriber
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup Subscriber
 *
 * @apiDescription Delete a subscriber with the given id
 *
 * @apiSuccess {String} name name of the subscriber
 * @apiSuccess {String} address subscriber address
 * @apiSuccess {String} email email address
 * @apiSuccess {String} website subscriber website
 * @apiSuccess {String} password secret password
 * @apiSuccess {String} logo subscriber logo
 * @apiSuccess {String} _id subscriber id
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    "email": "subscriber@email.com",
 *    "name": "Jumia Online Shop",
 *    "website": "http://www.jumia.co.ke",
 *    "address": "Moi Avenue, Top House",
 *    "logo": "logo_url"
 *  }
 *
 */
router.delete('/:id', subscriberController.delete);

/**
 * @api {put} /subscribers/:id/subscription?config=<enable|disable> Configure Subscriber Subscription
 * @apiVersion 1.0.0
 * @apiName ConfigureSubscription
 * @apiGroup Subscriber
 *
 * @apiDescription Configure subscription of a subscriber. Use config values ```enable``` or ```disable```.
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "subscription": "enabled"
 *  }
 */
router.put('/:id/subscription', subscriberController.updateSubscription);


/**
 * @api {put} /subscribers/:id/plans Update subscribers subscription plans
 * @apiVersion 1.0.0
 * @apiName UpdateSubscriptionPlan
 * @apiGroup Subscriber
 *
 * @apiDescription Update subscription of a given subscriber
 *
 * @apiParam {String} plan subscription plan
 *
 * @apiParamExample Request Example:
 * {
 *    "plan" : "pro"
 * }
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "updated": true
 *  }
 */
router.put('/:id/plans', subscriberController.updateSubscriptionPlan);

/**
 * @api {put} /subscribers/:id/logos Update subscribers logos
 * @apiVersion 1.0.0
 * @apiName UpdateLogo
 * @apiGroup Subscriber
 *
 * @apiDescription Update a logo of a given subscriber. This should be submitted as
 * ```multipart/form-data``` data format.
 *
 * @apiParam {String} logo new logo buffer
 *
 * @apiParamExample Request Example(submitted as ```multipart/form-data```):
 * {
 *    "logo": "<LOGO_BUFFER>"
 * }
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "updated": true
 *  }
 */
router.put('/:id/logos', subscriberController.updateLogo);

/**
 * @api {post} /subscribers/password/update Update subscribers password
 * @apiVersion 1.0.0
 * @apiName UpdatePassword
 * @apiGroup Subscriber
 *
 * @apiDescription Update password of a given subscriber.
 *
 * @apiParam {String} password new password
 *
 * @apiParamExample Request Example:
 * {
 *    "new_password" : "newpassword"
 *    "old_password" : "oldpassword"
 * }
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "updated": true
 *  }
 */
router.put('/password/update', subscriberController.updatePassword);

// Expose Subscriber Router
module.exports = router;
