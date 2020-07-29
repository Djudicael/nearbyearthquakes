//Library used for the CLI application
const inquirer = require('inquirer');

module.exports = {
    //Question asked to the user
    askLatitudeLongitude: () => {
        const questions = [
            {
                name: 'latitude',
                type: 'input',
                message: 'Enter the Latitude:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter the Latitude.';
                    }
                }
            },
            {
                name: 'longitude',
                type: 'input',
                message: 'Enter the Longitude:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter the Longitude.';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
};