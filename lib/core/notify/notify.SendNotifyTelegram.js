module.exports = SendNotifyTelegram;
//UUID : b2c2de69-a408-4126-bd64-ff588a78e4fd

var Promise = require('bluebird');

/**
 * Set a new state for a device by executing 
 * the related service.
 */
function SendNotifyTelegram(param) {

  // handling scenarios
  if(param.hasOwnProperty('params')) {
    param = param.params; 
  }
  //{ user: '2', text: 'Ceci est un test' }
  //gladys.modules.telegram.notify({text: 'essai message'}, {id: 1});


  return gladys.modules.telegram.notify({text: param.text}, {id: param.user})
  .then(() => {
	return Promise.resolve(true);
  })
  .catch(function(err){
          // something bad happened ! :/
	return Promise.resolve(false);
  });


}
