module.exports = SendNotifySmsFree;
//UUID : a9caf8bc-0f13-4aaf-a701-f410037ccb8e

var Promise = require('bluebird');

/**
 * Set a new state for a device by executing 
 * the related service.
 */
function SendNotifySmsFree(param) {

  // handling scenarios
  if(param.hasOwnProperty('params')) {
    param = param.params; 
  }
  //{ user: '2', text: 'Ceci est un test' }
  //gladys.modules.smsfree.notify({ user: 2, title: 'Ceci est un test', text: 'Bonjour,test' });


  return gladys.modules.smsfree.notify({ user: param.user, title: 'Info', text: param.text})
  .then(() => {
	return Promise.resolve(true);
  })
  .catch(function(err){
          // something bad happened ! :/
	return Promise.resolve(false);
  });


}
