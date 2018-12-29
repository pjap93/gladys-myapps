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

   var conditions_fr = [
   {
		uuid: 'f4638266-ba15-40df-88e8-eab0bb9637eb',
		name: 'Valeur DeviceState',
		description: 'Si un DeviceType à une valeur donnée',
		service: 'myapps',
		function: 'device_isItValidCondition',
		params: [{
			name: 'DeviceType',
			variablename: 'devicetype',
			path: '/devicetype',
		},
		{
			name: 'Valeur',
			variablename: 'value',
			path: null,			
		}]
   },
   {
		uuid: '1610d4fe-f6b6-4026-ba14-4e883dc5d2fc',
		name: 'Plage Horaire',
		description: 'Valide une plage horaire de fonctionnement (HH:MM:SS)',
		service: 'time',
		function: 'isInTimeRange',
		params: [{
			name: 'Début',
			variablename: 'start',
			path: null,
		},
		{
			name: 'Fin',
			variablename: 'end',
			path: null,			
		}]
   },
   {
		uuid: '56cd5152-6e1d-4cb5-9ebd-837c7405d6c6',
		name: 'Matin',
		description: "S\'il est le matin dans une maison donnée.",
		service: 'time',
		function: 'isItAM',
		params: [{
			name: 'Maison',
			variablename: 'house',
			path: '/house',
		}]
   },
   {
		uuid: 'eee05a31-faf9-49b1-aad9-d7361273b7fd',
		name: 'Après-Midi',
		description: "S\'il est l'après-midi dans une maison donnée.",
		service: 'time',
		function: 'isItPM',
		params: [{
			name: 'Maison',
			variablename: 'house',
			path: '/house',
		}]
   }   
   ];

   var conditions_en = [
   {
		uuid: '0d675a55-3d56-4ace-9571-0b8c7ad79b55',
		name: 'Value DeviceState',
		description: 'If a DeviceType to a given value.',
		service: 'myapps',
		function: 'device_isItValidCondition',
		params: [{
			name: 'DeviceType',
			variablename: 'devicetype',
			path: '/devicetype',
		},
		{
			name: 'Value',
			variablename: 'value',
			path: null,			
		}]
   },
   {
		uuid: '7315b528-f28f-4b7f-bfbc-b837c6bcd54d',
		name: 'Time range',
		description: 'Valid a running time range (HH:MM:SS)',
		service: 'time',
		function: 'isInTimeRange',
		params: [{
			name: 'Start',
			variablename: 'start',
			path: null,
		},
		{
			name: 'End',
			variablename: 'end',
			path: null,			
		}]
   },
   {
		uuid: 'ca10dd86-4a5e-4fb7-b97a-3d1c81cce52e',
		name: 'Morning',
		description: 'If it\'s morning in a given house.',
		service: 'time',
		function: 'isItAM',
		params: [{
			name: 'Maison',
			variablename: 'house',
			path: '/house',
		}]
   },
   {
		uuid: '7606e9d0-c5d2-4b68-9316-21a66cee78d5',
		name: 'Afternoon',
		description: "If it is the afternoon in a given house.",
		service: 'time',
		function: 'isItPM',
		params: [{
			name: 'Maison',
			variablename: 'house',
			path: '/house',
		}]
   }    
   ];

	

 	
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
	.then((langue) => {

		if(langue === 'fr-FR') {
			return Promise.map(actions_fr, function(element) {
  
  			return gladys.actionType.create(element)
  			.then((result) => {
    				return gladys.actionType.addParams(result.id,element.params)
				.catch(function(err){
					return false;
  				});

  			})
		  	.catch(function(err){
				return false;
  			});
  
			});
		} else {
			return Promise.map(actions_en, function(element) {
 
  			return gladys.actionType.create(element)
  			.then((result) => {
    				return gladys.actionType.addParams(result.id,element.params)
				.catch(function(err){
					return false;
  				});

  			})
		  	.catch(function(err){
				return false;
  			});
  
			});
		}
	})
	.then(() => {
		if(langue === 'fr-FR') {
			return Promise.map(conditions_fr, function(element) {
 
				return gladys.stateType.create(element)
					.catch(function(err){
						return false;
					});
				})
				.catch(function(err){
					return false;
				});
  
		} else {
			return Promise.map(conditions_en, function(element) {
 
				return gladys.stateType.create(element)
					.catch(function(err){
						return false;
					});
				})
				.catch(function(err){
					return false;
				});
  
		}
		
	})
	.then(() => {
		sails.log.info('myApps : Module installed');
		return true;	
	})
  	.catch(function(err){
		return false;
  	});

		
};

