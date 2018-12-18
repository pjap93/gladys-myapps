// Create parameters
module.exports = function () {

  var param_1_fr = {
	  uuid: 'ce5fd30d-4fc4-4d9f-9511-d77c4438621b',
	  name: "Inverse l'état d'un device",
	  description: "Inverse l'état par rapport à son dernier état (min - max)",
	  service: 'myapps',
	  function: 'flipflop'
	  params : [ {
		  name: 'DeviceType',
		  variablename: 'deviceType',
		  path: '/deviceType'
	  }]	  
  };

  var param_1_en = {
	  uuid: '05ea46e7-4a93-4ed9-a3b6-beed27aa9f26',
	  name: "Reverse the state of a device",
	  description: "Inverts the state from its last state (min - max)",
	  service: 'myapps',
	  function: 'flipflop'
	  params : [ {
		  name: 'DeviceType',
		  variablename: 'deviceType',
		  path: '/deviceType'
	  }]		  
	  
	  
  };

 	
	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
			return gladys.statetype.create(param_1_fr);
		else
			return gladys.statetype.create(param_1_en);
	});

	sails.log.info('myApps : Module installed');

	return Promise.resolve();	
	
	
	
	
	
	
	
};
