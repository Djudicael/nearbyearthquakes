//Using lodash uniqBy for the distinct element in list
const _ = require('lodash');
const distanceCalculationInKm = require('./geographicHelper');
const Earthquake = require('../domain/Earthquake');

/**
 * Process the date coming from Usgs to create specific Earthquake domaine
 * param: currentPosition
 */
const processUsgsDataToEarthquakesDomain = (currentPosition, earthquakesUsgsData) => {

    return earthquakesUsgsData.reduce(function (earthquakes, currrentEarthquakeUsgs) {

        const earthquakeCoordinates = {
            longitude: currrentEarthquakeUsgs.geometry.coordinates[0],
            latitude: currrentEarthquakeUsgs.geometry.coordinates[1]
        }

        const earthquake = new Earthquake
            (
                currrentEarthquakeUsgs.properties.title,
                //create string from earthquakeCoordinates object for uniqueness filter
                Object.entries(earthquakeCoordinates).toString(),
                distanceCalculationInKm(currentPosition, earthquakeCoordinates)
            );

        earthquakes.push(earthquake);
        return earthquakes;
    }, []);

}

const sortEarthquakesByDistance = (a, b) => a.distance - b.distance;

/**
 * Filter list on longitude latitude coordinates
 */
const distinctEarthquakesCoordinates = (earthquakes) => _.uniqBy(earthquakes, 'coordinates');

module.exports = { processUsgsDataToEarthquakesDomain, sortEarthquakesByDistance, distinctEarthquakesCoordinates };