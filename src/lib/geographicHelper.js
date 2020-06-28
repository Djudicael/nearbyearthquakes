//Library used to calculate distance
const geolib = require('geolib');


/**
 * Calculate the distance between 2 geometrics points using longitude and latitude
 */
module.exports = distanceCalculationInKm = (currentPosition, earthquakeCoordinates) => {

    //Calculate the distance between earthquake and position
    const distanceInMeter = geolib.getDistance(currentPosition, earthquakeCoordinates);
    //Convert distance  into km
    const distanceConvertedIntoKilometer = geolib.convertDistance(distanceInMeter, 'km');

    //Remove decimal from distance
    return Math.trunc(distanceConvertedIntoKilometer);
}
