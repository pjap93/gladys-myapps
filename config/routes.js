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


};