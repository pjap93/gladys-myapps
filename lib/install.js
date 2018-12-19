var Promise = require('bluebird');

// Create parameters
module.exports = function () {

  var langue='';

  var param_1_fr = {
	  uuid: 'a5760e31-847d-4049-8480-e239384b7074',
	  name: "Inverse l'état d'un device",
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
		if(lang[0].language === 'fr-FR') {
			langue='fr-FR';
			return gladys.actionType.create(param_1_fr);
		} else {
			langue='en-EN';
			return gladys.actionType.create(param_1_en);
		}
	})
	.then(function(newActionType){

		if(langue === 'fr-FR') {
     			if(param_1_fr.params){
        			return insertParams(newActionType, param_1_fr.params);
      			} else {
        			return newActionType;
      			}	
		} else {
     			if(param_1_en.params){
        			return insertParams(newActionType, param_1_en.params);
      			} else {
        			return newActionType;
      			}
		}

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
    return gladys.utils.sql("INSERT INTO `gladys`.`actiontypeparam` (`name`,`variablename`,`path`,`actiontype`) VALUES (?,?,?,?);",[param.name,param.variablename,param.path,actionType.id]);
  })
    .then(function(){
      return actionType;
    });
}
