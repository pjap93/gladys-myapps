var Promise = require('bluebird');


module.exports = function (location) {
	
	console.log(location);
	
	return Promise.all(gladys.area.getDistance(location))
	.spread((areasByDistance) => {
		console.log(areasByDistance);
		return areasByDistance;
	});
	
	
};