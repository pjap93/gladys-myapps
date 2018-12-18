var Promise = require('bluebird');

/**
 * @public
 * @description This function return all houses
 * @name gladys.house.get
 * @param {Object} options
 * @param {integer} options.take The number of houses to return (optional)
 * @param {integer} options.skip The number of houses to skip (optional)
 * @returns {Array<houses>} houses
 * @example
 * var options = {
 *      take: 50,
 *      skip: 0
 * }
 * gladys.house.get(options)
 *      .then(function(houses){
 *          // do something
 *      })
 */

module.exports = function condition(){
    
  var options = [
  {
    "id": 1,
    "name": "égal"
  },
  {
    "id": 2,
    "name": "différent"
  },
  {
    "id": 3,
    "name": "supérieur ou égal"
  },
  {
    "id": 4,
    "name": "strictement supérieur"
  },
  {
    "id": 5,
    "name": "inférieur ou égal"
  },
  {
    "id": 6,
    "name": "strictement inférieur"
  }

];
    
    return Promise.resolve(options);
};