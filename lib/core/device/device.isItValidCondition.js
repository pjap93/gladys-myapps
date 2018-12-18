var queries = require('./device.queries.js');
var Promise = require('bluebird');

module.exports = function (options){

// { devicetype: '158', condition: '5', value: '15' }
    
var result = false;

	return gladys.utils.sql(queries.getLastValue, [options.devicetype])
		.then((lastValue) => {

			switch (options.condition) {
  				case '1': //egal
					if(options.value === lastValue[0].lastValue) {result = true;}
					break;
  				case '2': //diferrent
					if(options.value !== lastValue[0].lastValue) {result = true;}
					break;
  				case '3': //superieur ou egal
					if(lastValue[0].lastValue >= options.value) {result = true;}
					break;
  				case '4': //>
					if(lastValue[0].lastValue > options.value) {result = true;}
					break;
  				case '5': //inferieur ou egal
					if(lastValue[0].lastValue <= options.value) {result = true;}
					break;
  				case '6': //<
					if(lastValue[0].lastValue < options.value) {result = true;}
					break;
				default:
					if(options.value === lastValue[0].lastValue) {result = true;}
				};

			return result;
		});
};