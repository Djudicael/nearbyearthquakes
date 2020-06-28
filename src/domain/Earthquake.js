// Give a little bit of life to the result by adding some colour ( lets have a some fun)
const chalk = require('chalk');

/**
 * Representation of Earthquake in the domain app
 */
module.exports = class Earthquake {

    constructor(title, coordinates, distance) {
        this.title = title;
        this.coordinates = coordinates;
        this.distance = distance;
    }

    /**
     * print to the console in the formated representation asked ( and with some colour)
     */
    printToConsole = () => console.log(chalk.red(this.title), chalk.yellow(" || "), chalk.green(this.distance));

}