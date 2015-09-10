/**
 * User router.
 *
 * @summary
 *  user.create()
 *  user.update()
 *  user.delete()
 *  user.fetchOne()
 *  user.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('anwani-api:user-router');

var userController  = require('../controllers/user');
var authController  = require('../controllers/auth');

var router  = express.Router();

/**
 * @api {post} /users/signup Create a user
 * @apiVersion 1.0.0
 * @apiName Signup
 * @apiGroup User
 *
 * @apiDescription Create a new user
 *
 * @apiParam {String} phone_number Phone number
 * @apiParam {String} email   Email address
 * @apiParam {String} password Password
 * @apiParam {String} username username
 * @apiParam {String} first_name first name
 * @apiParam {String} last_name last name
 * @apiParam {String} other_name other names
 *
 * @apiParamExample Request Example:
 *  {
 *    "phone_number": "254711223344",
 *    "password": "password",
 *    "username": "john_smthi",
 *    "email" : "john_smith@email.com",
 *    "last_name": "smith",
 *    "first_name": "john",
 *    "other_name": "cole"
 *  }
 *
 * @apiSuccess {String} _id user id
 * @apiSuccess {String} username username
 * @apiSuccess {String} first_name first name
 * @apiSuccess {String} last_name last name
 * @apiSuccess {String} other_name other names
 * @apiSuccess {Array} addresses addresses
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    "username": "john_smthi",
 *    "last_name": "smith",
 *    "first_name": "john",
 *    "other_name": "cole",
 *    "addresses" : []
 *  }
 *
 */
router.post('/signup', userController.create);

/**
 * @api {post} /users/login Login a user
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup User
 *
 * @apiDescription Log in a  user
 *
 * @apiParam {String} username username
 * @apiParam {String} password Password
 *
 * @apiParamExample Request Example:
 *  {
 *    "username": "john_smthi",
 *    "password": "password"
 *  }
 *
 * @apiSuccess {String} token auth token
 * @apiSuccess {Object} user user info
 * @apiSuccess {String} user._id user id
 * @apiSuccess {String} user.username username
 * @apiSuccess {String} user.first_name first name
 * @apiSuccess {String} user.last_name last name
 * @apiSuccess {String} user.other_name other names
 * @apiSuccess {String} user.email email
 * @apiSuccess {String} user.phone_number phone number
 * @apiSuccess {Array} user.addresses addresses
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "token" : "ylHUMaVrS0dpcO/+nT+6aAVVGcRJzu=",
 *    "user": {
 *      "_id" : "556e1174a8952c9521286a60",
 *      "username": "john_smthi",
 *      "last_name": "smith",
 *      "first_name": "john",
 *      "other_name": "cole",
 *      "email": "john_smith@mail.com",
 *      "phone_number": "254711223344",
 *      "addresses" : []
 *    }
 *  }
 *
 */
router.post('/login', authController.login);

/**
 * @api {post} /users/logout Logout a user
 * @apiVersion 1.0.0
 * @apiName Logout
 * @apiGroup User
 *
 * @apiDescription Invalidate a users token
 *
 * @apiSuccess {Boolean} logged_out message
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "logged_out" : true
 *  }
 *
 */
router.post('/logout', authController.logout);


/**
 * @api {get} /users/:id Get User
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup User
 *
 * @apiDescription Get a user with the given id
 *
 * @apiSuccess {String} _id user id
 * @apiSuccess {String} username username
 * @apiSuccess {String} first_name first name
 * @apiSuccess {String} last_name last name
 * @apiSuccess {String} other_name other names
 * @apiSuccess {Array} addresses addresses
 * @apiSuccess {String} email email
 * @apiSuccess {String} phone_number phone number
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    "username": "john_smthi",
 *    "last_name": "smith",
 *    "first_name": "john",
 *    "other_name": "cole",
 *    "email": "john_smith@mail.com",
 *    "phone_number": "254711223344",
 *    "addresses" : []
 *  }
 */
router.get('/:id', userController.fetchOne);

/**
 * @api {put} /users/:id Update User
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup User
 *
 * @apiDescription Update a user with the given id
 *
 * @apiSuccess {String} _id user id
 * @apiSuccess {String} username username
 * @apiSuccess {String} first_name first name
 * @apiSuccess {String} last_name last name
 * @apiSuccess {String} other_name other names
 * @apiSuccess {Array} addresses addresses
 * @apiSuccess {String} email email
 * @apiSuccess {String} phone_number phone number
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    "username": "john_smthi",
 *    "last_name": "smith",
 *    "first_name": "john",
 *    "other_name": "cole",
 *    "email": "john_smith@mail.com",
 *    "phone_number": "254711223344",
 *    "addresses" : []
 *  }
 */
router.put('/:id', userController.update);

/**
 * @api {get} /users Get users collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup User
 *
 * @apiDescription Get a collection of users
 *
 *
 * @apiSuccess {String} _id user id
 * @apiSuccess {String} username username
 * @apiSuccess {String} first_name first name
 * @apiSuccess {String} last_name last name
 * @apiSuccess {String} other_name other names
 * @apiSuccess {Array} addresses addresses
 * @apiSuccess {String} email email
 * @apiSuccess {String} phone_number phone number
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60",
 *    "username": "john_smthi",
 *    "last_name": "smith",
 *    "first_name": "john",
 *    "other_name": "cole",
 *    "email": "john_smith@mail.com",
 *    "phone_number": "254711223344",
 *    "addresses" : []
 *  }]
 *
 */
router.get('/', userController.fetchAll);

/**
 * @api {delete} /users/:id Delete User
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup User
 *
 * @apiDescription Delete a user with the given id
 *
 * @apiSuccess {String} _id user id
 * @apiSuccess {String} username username
 * @apiSuccess {String} first_name first name
 * @apiSuccess {String} last_name last name
 * @apiSuccess {String} other_name other names
 * @apiSuccess {Array} addresses addresses
 * @apiSuccess {String} email email
 * @apiSuccess {String} phone_number phone number
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    "username": "john_smthi",
 *    "last_name": "smith",
 *    "first_name": "john",
 *    "other_name": "cole",
 *    "email": "john_smith@mail.com",
 *    "phone_number": "254711223344",
 *    "addresses" : []
 *  }
 *
 */
router.delete('/:id', userController.delete);

/**
 * @api {get} /users Get user's address collection
 * @apiVersion 1.0.0
 * @apiName FetchUserAddresses
 * @apiGroup User
 *
 * @apiDescription Get a collection of user's addresses
 *
 * @apiSuccess {String} _id address id
 * @apiSuccess {String} user user id
 * @apiSuccess {String} virtual_code virtual code
 * @apiSuccess {String} location_pic location photo
 * @apiSuccess {Number} latitude latitude coordinate
 * @apiSuccess {Number} longitude longitude coordinate
 * @apiSuccess {String} street_address street address
 * @apiSuccess {String} city city name
 * @apiSuccess {String} country country name
 *
 * @apiSuccessExample Response Example:
 *  [{
 *    "_id" : "556e1174a8952c9521286a60",
 *    user: "556e1174a8952c9521286a60",
 *    virtual_code: "MP7H+E2",
 *    location_pic: "/media/a8952c9521286a60.jpeg",
 *    latitude: 4.567889,
 *    longitude: -12.098,
 *    street_address: "",
 *    city: "nairobi",
 *    country: "kenya"
 *  }]
 *
 */
router.get('/:id/addresses', userController.fetchUserAddresses);

/**
 * @api {delete} /users/:id Delete User Address
 * @apiVersion 1.0.0
 * @apiName RemoveUserAddress
 * @apiGroup User
 *
 * @apiDescription Delete a user address with the given id
 *
 * @apiSuccess {String} _id address id
 * @apiSuccess {String} user user id
 * @apiSuccess {String} virtual_code virtual code
 * @apiSuccess {String} location_pic location photo
 * @apiSuccess {Number} latitude latitude coordinate
 * @apiSuccess {Number} longitude longitude coordinate
 * @apiSuccess {String} street_address street address
 * @apiSuccess {String} city city name
 * @apiSuccess {String} country country name
 *
 * @apiSuccessExample Response Example:
 *  {
 *    "_id" : "556e1174a8952c9521286a60",
 *    user: "556e1174a8952c9521286a60",
 *    virtual_code: "MP7H+E2",
 *    location_pic: "/media/a8952c9521286a60.jpeg",
 *    latitude: 4.567889,
 *    longitude: -12.098,
 *    street_address: "",
 *    city: "nairobi",
 *    country: "kenya"
 *  }
 *
 */
router.delete('/:id/addresses/:addrId', userController.removeUserAddress);


// Expose User Router
module.exports = router;
