package nearbyearthquakes.domain.usgs;

public class Feature {

    private Properties properties;
    private Point geometry;

    public Properties getProperties() {
        return properties;
    }

    public Point getGeometry() {
        return geometry;
    }
}
