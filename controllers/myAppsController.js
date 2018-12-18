/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Pjap93
  */

module.exports = {

  /**
   * @api {post} myapps/command_light/:device_id/house/:house_id/ 
   * @apiName Mark user as seen
   * @apiGroup User
   * @apiPermission authenticated
   * 
   * @apiDescription Mark user as seen in a house
   * 
   */
  command_light: function(req, res, next){
    sails.log.debug('Command_light');
    sails.log.debug(req.body);
    gladys.modules.myapps.command_light({house: req.params.house_id, device: req.params.device_id})
          .then(function(result){
              return res.json(result);
          })
          .catch(next);
    },

    /**
   * @api {get} /brain/classify_muet send a question to gladys
   * @apiName classify_muet
   * @apiGroup Brain
   * @apiPermission authenticated
   *
   * @apiParam {String} q the message for Gladys
   */
    classify_muet: function(req, res, next){
        gladys.modules.myapps.classify_muet(req.session.User, {text: req.query.q})
              .then(function(result){
                return res.json(result);
              })
              .catch(next);
    },

   /**
   * @api {get} /myapps/device_condition send a list possible
   * @apiName typeday
   * @apiGroup daycalendar
   * @apiPermission authenticated
   *
   * @apiParam {String} q the message for Gladys
   */
    device_condition: function(req, res, next){
        gladys.modules.myapps.device_condition()
          .then(function(types){
              return res.json(types);
          })
          .catch(next);
    },

  /**
   * @api {post}/devicetype/:id/flipflop change a deviceType state
   * @apiName execDeviceType
   * @apiGroup DeviceType
   * @apiPermission authenticated
   * @apiDescription This API is not for sensors ! It's only for devices that need to execute an action. Ex: A lamp. If you want to save the state of a sensor, you need to use the POST /devicestate route.
   *
   * @apiParam {float} [value] New value to apply to the deviceType
   *
   * @apiUse DeviceStateSuccess
   */
  flipflop: function(req, res, next) {
    gladys.modules.myapps
      .flipflop({ devicetype: req.params.id})
      .then(function(state) {
        return res.json(state);
      })
      .catch(next);
  },

  /**
   * @api {get} /devicetype/:id/flipflop change a deviceType state (GET)
   * @apiName execDeviceTypeGet
   * @apiGroup DeviceType
   * @apiPermission authenticated
   * @apiDescription This API is not for sensors ! It's only for devices that need to execute an action. Ex: A lamp. If you want to save the state of a sensor, you need to use the POST /devicestate route.
   * @apiParam {float} [value] New value to apply to the deviceType
   *
   * @apiUse DeviceStateSuccess
   */
  flipflopGet: function(req, res, next) {
    gladys.modules.myapps
      .flipflop({ devicetype: req.params.id})
      .then(function(state) {
        return res.json(state);
      })
      .catch(next);
  }


};