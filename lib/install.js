// Create parameters
module.exports = function () {

  var param_1_fr = {
	  uuid: 'ce5fd30d-4fc4-4d9f-9511-d77c4438621b',
	  name: "Inverse l'Ã©tat d'un device",
	  description: "Inverse l'état par rapport à son dernier état (min - max)",
	  service: 'myapps',
	  function: 'flipflop',
	  params: [ {
		  name: 'DeviceType',
		  variablename: 'devicetype',
		  path: '/devicetype'
	  }]	  
  };

  var param_1_en = {
	  uuid: '05ea46e7-4a93-4ed9-a3b6-beed27aa9f26',
	  name: "Reverse the state of a device",
	  description: "Inverts the state from its last state (min - max)",
	  service: 'myapps',
	  function: 'flipflop',
	  params: [ {
		  name: 'DeviceType',
		  variablename: 'devicetype',
		  path: '/devicetype'
	  }]  
  };

 	
	return gladys.utils.sql('select language from user where role=\'admin\' order by id')
	.then(function(lang){
		if(lang[0].language!='fr-FR')
			return gladys.actionType.create(param_1_fr);
		else
			return gladys.actionType.create(param_1_en);
	})
	.then(function(newSActionType){
		console.log(newSActionType);
		
		return Promise.resolve();
	})	
	.then(() => {

	sails.log.info('myApps : Module installed');

	return Promise.resolve();	
	});
	
};



// insert actionTypeParams
function insertParams(actionType, params){
  return Promise.each(params, function(param){
    param.actiontype = actionType.id;
    return gladys.stateTypeParam.create(param); 
  })
    .then(function(){
      return stateType;
    });
}