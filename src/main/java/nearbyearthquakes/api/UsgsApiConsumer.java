package nearbyearthquakes.api;

import feign.RequestLine;
import nearbyearthquakes.domain.usgs.FeatureCollection;

public interface UsgsApiConsumer {

    @RequestLine("GET /earthquakes/feed/v1.0/summary/all_month.geojson")
    FeatureCollection getLast30DaysEarthquakesDatas();

}
