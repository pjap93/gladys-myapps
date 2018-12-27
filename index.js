module.exports = function(sails) {
    
    //var setup = require('./lib/setup.js');
    //var exec = require('./lib/exec.js');
    //var init = require('./lib/init.js');
    var install = require('./lib/install.js');
    //var getDay = require('./lib/getDay.js');
    //var isItDay = require('./lib/isItDay.js');
	var initialize = require('./lib/initialize.js');
	var command_light = require('./lib/command_light.js');
	//var time_isItTime = require('./lib/core/time/time.isItTime.js'); ajouté dans le core
	var classify_muet = require('./lib/core/brain/classify_muet.js');
	var device_condition = require('./lib/core/device/device.condition.js');
	var device_isItValidCondition = require('./lib/core/device/device.isItValidCondition.js');
	var flipflop = require('./lib/core/device/devicetype.flipflop.js');
	var SendNotifySmsFree = require('./lib/core/notify/notify.SendNotifySmsFree.js');
	var SendNotifyTelegram = require('./lib/core/notify/notify.SendNotifyTelegram.js');
	var SendNotifyByService = require('./lib/core/notify/notify.SendNotifyByService.js');

	


    //var uninstall = require('./lib/uninstall.js');

    //gladys.on('ready', function(){
    //    init();
    //});

    return {
          //setup: setup,
      	  install: install,
          //uninstall: uninstall,
	  //exec: exec,
	  //getDay: getDay,
	  //isItDay: isItDay
	  initialize: initialize,
	  command_light: command_light,
	  //time_isItTime: time_isItTime,
	  classify_muet: classify_muet,
	  device_condition: device_condition,
	  device_isItValidCondition: device_isItValidCondition,
	  flipflop: flipflop,
	  SendNotifySmsFree: SendNotifySmsFree,
	  SendNotifyTelegram: SendNotifyTelegram,
	  SendNotifyByService: SendNotifyByService,

        };
};
