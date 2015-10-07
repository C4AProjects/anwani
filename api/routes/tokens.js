/**
 * Token router.
 *
 * @summary
 *  token.create()
 *  token.update()
 *  token.delete()
 *  token.fetchOne()
 *  token.fetchAll()
 */

/**
 * Load Module Dependencies.
 */
var express  = require('express');
var debug    = require('debug')('anwani-api:token-router');

var tokenController  = require('../controllers/token');

var router  = express.Router();

/**
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Token
 *
 * @apiDescription Get a token with the given id
 *
 *
 */
router.get('/:id', tokenController.fetchOne);

/**
 * @apiVersion 1.0.0
 * @apiName Update
 * @apiGroup Token
 *
 * @apiDescription Update a token with the given id
 *
 */
router.put('/:id', tokenController.update);

/**
 * @apiVersion 1.0.0
 * @apiName FetchAll
 * @apiGroup Token
 *
 * @apiDescription Get a collection of tokens
 *
 *
 */
router.get('/', tokenController.fetchAll);

/**
 * @apiVersion 1.0.0
 * @apiName Delete
 * @apiGroup Token
 *
 * @apiDescription Delete a token with the given id
 *
 *
 */
router.delete('/:id', tokenController.delete);


// Expose Token Router
module.exports = router;
