
const CLI = require('clui');
const Spinner = CLI.Spinner;
const {URL} = require('./src/config');
const UsgsApiConsumer = require('./src/api/UsgsApiConsumer');

//import libraries
const inquirer = require('./src/lib/inquirer');
const { processUsgsDataToEarthquakesDomain, distinctEarthquakesCoordinates, sortEarthquakesByDistance } = require('./src/lib/processData');


/**
 * Main logic method 
 * @param {*} currentPosition 
 */
const getNearbyEarthquakes = async (currentPosition) => {

    const usgsApiConsumer = new UsgsApiConsumer(URL);

    const status = new Spinner('Searching the nearby earthquakes, please wait...');
    //Start the spinner loading
    status.start();

    //Call USGS api
    const earthquakesUsgsData = await usgsApiConsumer.getLast30DaysEarthquakesDatas()
        .catch((err) => {
            //Stop the spinner loading in case there is an error( it will be remove from the screen)
            status.stop();
            throw new Error('Oups cannot fetch data try later');
        }
        );


    const earthquakes = processUsgsDataToEarthquakesDomain(currentPosition, earthquakesUsgsData);
    //Stop the spinner loading to print the date
    status.stop();

    //Distinct earthquake by longitude andlatidue coordonates
    distinctEarthquakesCoordinates(earthquakes)
        .sort(sortEarthquakesByDistance)
        //Get the 10 firsts of the list
        .slice(0, 10)
        .forEach(earthquake => earthquake.printToConsole());

}

/**
 * method to execute the application
 */
const run = async () => {
    let currentPosition = await inquirer.askLatitudeLongitude();

    //check input validity( suppose to be numbers)
    if (!isNaN(currentPosition.latitude) && !isNaN(currentPosition.longitude)) {
        await getNearbyEarthquakes(currentPosition).catch((err) => {
            console.error(err);
        });
    } else {
        console.error('The longitude and the latitude are not number');
    }
};

//Execute the application
run();