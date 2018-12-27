module.exports = SendNotifyByService;
//UUID : 44144dc2-dfad-43c2-9ffe-350963cb6735

// { serviceid: '29', title: 'Info', text: 'Test', user: '1' }
var Promise = require('bluebird');
var queries = require('./notify.queries.js');


/**
 * Set a new state for a device by executing 
 * the related service.
 */
function SendNotifyByService(param) {

  // handling scenarios
  if(param.hasOwnProperty('params')) {
    param = param.params; 
  }

  //console.log(param);


   return gladys.utils.sql(queries.getByNotificationType, [param.serviceid])
		.then((infoservice) => {
			//console.log(infoservice);
			if (gladys.modules[infoservice[0].service] || typeof gladys.modules[infoservice[0].service].notify === 'function') {
    				return gladys.modules[infoservice[0].service].notify(param, {id: param.user});
  			} else {
    				return Promise.reject(new Error(`${type.service} is not a valid service`));
 			}		
		})
 		.catch(function(err){
          		// something bad happened ! :/
			return Promise.resolve(false);
  		});


  //{ user: '2', text: 'Ceci est un test' }
  //gladys.modules.telegram.notify({text: 'essai message'}, {id: 1});


 // return gladys.modules.telegram.notify({text: param.text}, {id: param.user})
 // .then(() => {
//	return Promise.resolve(true);
 // })
 // .catch(function(err){
          // something bad happened ! :/
//	return Promise.resolve(false);
//  });


}
