var Promise = require('bluebird');

// Create parameters
module.exports = function () {

  var langue='';

   var actions_fr = [
    {
    uuid: '44144dc2-dfad-43c2-9ffe-350963cb6735',
    service: 'myapps',
    function: 'SendNotifyByService',
    name: 'Nouvelle notification par service',
    description: 'Envoie une nouvelle notification par un service donnée',
    optionspath: null,
    params: [
        {
            name: 'Service',
            variablename: 'serviceid',
            path: '/notificationuser'
        },
        {
            name: 'Titre',
            variablename: 'title',
            path: null
        },
        {
            name: 'Texte',
            variablename: 'text',
            path: null
        },
        {
            name: 'Utilisateur',
            variablename: 'user',
            path: '/user'
        },
        ]
    },
	{
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
	}
    ];

   var actions_en = [
    {
    uuid: ' b58074fe-e9be-46b1-9daa-70f2e668e0cc',
    service: 'myapps',
    function: 'SendNotifyByService',
    name: 'New notification by service',
    description: 'Send new notification by service selected',
    optionspath: null,
    params: [
        {
            name: 'Service',
            variablename: 'serviceid',
            path: '/notificationuser'
        },
        {
            name: 'Title',
            variablename: 'title',
            path: null
        },
        {
            name: 'Text',
            variablename: 'text',
            path: null
        },
        {
            name: 'User',
            variablename: 'user',
            path: '/user'
        },
        ]
    },
	{
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
	}
    ];
/*
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
*/
/*
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
*/
 	
	return gladys.utils.sql('select language from user where role=\'admin\' order by id')
	.then(function(lang){
		if(lang[0].language === 'fr-FR') {
			langue='fr-FR';
			return langue;
		} else {
			langue='en-EN';
			return langue;
		}
	})
/*	.then(function(newActionType){

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

	})*/
	.then((langue) => {

		if(langue === 'fr-FR') {
			return Promise.map(actions_fr, function(element) {
  
  			return gladys.actionType.create(element)
  			.then((result) => {
    				return gladys.actionType.addParams(result.id,element.params)
				.catch(function(err){
					return Promise.resolve(false);
  				});

  			})
		  	.catch(function(err){
				return Promise.resolve(false);
  			});
  
			});
		} else {
			return Promise.map(actions_en, function(element) {
 
  			return gladys.actionType.create(element)
  			.then((result) => {
    				return gladys.actionType.addParams(result.id,element.params)
				.catch(function(err){
					return Promise.resolve(false);
  				});

  			})
		  	.catch(function(err){
				return Promise.resolve(false);
  			});
  
			});
		}


	})	
	.then(() => {

		
		sails.log.info('myApps : Module installed');

		return Promise.resolve(true);	
	})
  	.catch(function(err){
          	// something bad happened ! :/
		return Promise.resolve(false);
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

