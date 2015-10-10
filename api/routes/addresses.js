/**
 * address router.
 *
 * @summary
 *  address.create()
 *  address.update()
 *  address.delete()
 *  address.fetchOne()
 *  address.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('anwani-api:address-router');

var addressController  = require('../controllers/address');

var router  = express.Router();

/**
 * @api {post} /addresses/create Create Address
 * @apiVersion 1.0.0
 * @apiName CreateNew
 * @apiGroup address
 *
 * @apiDescription Create an Address. Data should be submitted as __multipart/form-data__.
 *
 * @apiParam {String} user id of the user creating the address
 * @apiParam {String} location_pic location photo
 * @apiParam {Number} latitude latitude coordinate
 * @apiParam {Number} longitude longitude coordinate
 * @apiParam {String} long_virtual_code long virtual code
 * @apiParam {String} short_virtual_code short virtual code
 * @apiParam {String} street_address street address
 * @apiParam {String} city city name
 * @apiParam {String} country country name
 *
 * @apiParamExample Request Example
 * (this is not json data but listing of request fields, all fields should be placed
 * as part of the multipart/form-data data):
 * {
 *      "user" : "556e1174a8952c9521286a60",
 *      location_pic: "image file"
 *      short_virtual_code: "MP7H+E2",
 *      long_virtual_code: "6E9AEFMP7H+E2FH",
 *      latitude: 4.567889,
 *      longitude: -12.098,
 *      street_address: "",
 *      city: "nairobi",
 *      country: "kenya"
 * }
 *
 * @apiSuccess {String} _id address id
 * @apiSuccess {String} user user id
 * @apiSuccess {String} long_virtual_code long virtual code
 * @apiSuccess {String} short_virtual_code short virtual code
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
 *    short_virtual_code: "MP7H+E2",
 *    long_virtual_code: "6E9AEFMP7H+E2FH",
 *    location_pic: "/media/a8952c9521286a60.jpeg",
 *    latitude: 4.567889,
 *    longitude: -12.098,
 *    street_address: "",
 *    city: "nairobi",
 *    country: "kenya"
 *  }
 *
 */
router.post('/create', addressController.create);


/**
 * @api {get} /addresses/:id Get address
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup address
 *
 * @apiDescription Get a address with the given id
 *
 * @apiSuccess {String} _id address id
 * @apiSuccess {String} user user id
 * @apiSuccess {String} long_virtual_code long virtual code
 * @apiSuccess {String} short_virtual_code short virtual code
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
 *    short_virtual_code: "MP7H+E2",
 *    long_virtual_code: "6E9AEFMP7H+E2FH",
 *    location_pic: "/media/a8952c9521286a60.jpeg",
 *    latitude: 4.567889,
 *    longitude: -12.098,
 *    street_address: "",
 *    city: "nairobi",
 *    country: "kenya"
 *  }
 */
router.get('/:id', addressController.fetchOne);

/**
 * @api {put} /addresses/:id Update address
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup address
 *
 * @apiDescription Update a address with the given id
 *
 * @apiSuccess {String} _id address id
 * @apiSuccess {String} user user id
 * @apiSuccess {String} long_virtual_code long virtual code
 * @apiSuccess {String} short_virtual_code short virtual code
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
 *    short_virtual_code: "MP7H+E2",
 *    long_virtual_code: "6E9AEFMP7H+E2FH",
 *    location_pic: "/media/a8952c9521286a60.jpeg",
 *    latitude: 4.567889,
 *    longitude: -12.098,
 *    street_address: "",
 *    city: "nairobi",
 *    country: "kenya"
 *  }
 */
router.put('/:id', addressController.update);

/**
 * @api {get} /addresses Get addresses collection
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup address
 *
 * @apiDescription Get a collection of addresses
 *
 * @apiSuccess {String} _id address id
 * @apiSuccess {String} user user id
 * @apiSuccess {String} long_virtual_code long virtual code
 * @apiSuccess {String} short_virtual_code short virtual code
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
 *    short_virtual_code: "MP7H+E2",
 *    long_virtual_code: "6E9AEFMP7H+E2FH",
 *    location_pic: "/media/a8952c9521286a60.jpeg",
 *    latitude: 4.567889,
 *    longitude: -12.098,
 *    street_address: "",
 *    city: "nairobi",
 *    country: "kenya"
 *  }]
 *
 */
router.get('/', addressController.fetchAll);

/**
 * @api {delete} /addresses/:id Delete address
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup address
 *
 * @apiDescription Delete a address with the given id
 *
 * @apiSuccess {String} _id address id
 * @apiSuccess {String} user user id
 * @apiSuccess {String} long_virtual_code long virtual code
 * @apiSuccess {String} short_virtual_code short virtual code
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
 *    short_virtual_code: "MP7H+E2",
 *    long_virtual_code: "6E9AEFMP7H+E2FH",
 *    location_pic: "/media/a8952c9521286a60.jpeg",
 *    latitude: 4.567889,
 *    longitude: -12.098,
 *    street_address: "",
 *    city: "nairobi",
 *    country: "kenya"
 *  }
 *
 */
router.delete('/:id', addressController.delete);

/**
 * @api {put} /addresses/:id/archive Archive an address
 * @apiVersion 1.0.0
 * @apiName Archive
 * @apiGroup address
 *
 * @apiDescription Archive an address with the given id
 *
 * @apiSuccess {String} _id address id
 * @apiSuccess {String} user user id
 * @apiSuccess {String} long_virtual_code long virtual code
 * @apiSuccess {String} short_virtual_code short virtual code
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
 *    short_virtual_code: "MP7H+E2",
 *    long_virtual_code: "6E9AEFMP7H+E2FH",
 *    location_pic: "/media/a8952c9521286a60.jpeg",
 *    latitude: 4.567889,
 *    longitude: -12.098,
 *    street_address: "",
 *    city: "nairobi",
 *    country: "kenya"
 *  }
 */
router.put('/:id/archive', addressController.archive);

// Expose address Router
module.exports = router;
