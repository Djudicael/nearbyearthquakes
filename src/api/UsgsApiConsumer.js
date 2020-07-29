const axios = require("axios");
module.exports = class UsgsApiConsumer {

    constructor(url) {
        this.instance = axios.create({
            baseURL: url
        });
    }

    /**
     * Fetch data from api 
     */
    async getLast30DaysEarthquakesDatas() {
       
            const response = await this.instance.get('/earthquakes/feed/v1.0/summary/all_month.geojson');

            return response.data.features;
      
    }

}