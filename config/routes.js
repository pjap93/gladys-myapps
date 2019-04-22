/**
 * Routes rules
 * @doc http://sailsjs.org/documentation/concepts/routes
 */

module.exports.routes = {
  'GET /myapps/command_light/:device_id/house/:house_id': 'myAppsController.command_light',
  'GET /brain/classify_muet': 'myAppsController.classify_muet',
  'GET /myapps/device_condition': 'myAppsController.device_condition',

  'POST /devicetype/:id/flipflop': 'myAppsController.flipflop',
  'GET /devicetype/:id/flipflop': 'myAppsController.flipflopGet',

  'POST /area/user_is_area/:user/latitude/:lat/longitude/:long': 'myAppsController.UserIsArea',
  'GET /area/user_is_area/:value': 'myAppsController.UserIsAreaGet' //value: user;latitude;longitude
  
  
};