/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const ArticlesController = require("../api/controllers/ArticlesController");
const SessionControlController = require("../api/controllers/SessionControlController");
const UsersController = require("../api/controllers/UsersController");

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': SessionControlController.checker,
  '/articles/list': ArticlesController.list,
  '/articles/add': ArticlesController.add,
  'POST /articles/create': ArticlesController.create,
  'POST /articles/delete/:id': ArticlesController.delete,
  '/articles/edit/:id': ArticlesController.edit,
  'POST /articles/update/:id': ArticlesController.update,

  '/test': UsersController.test,
  '/login': UsersController.login,
  'POST /login': UsersController.loginProcess,
  'POST /createUser': UsersController.create,
  '/logout': UsersController.logout,


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
