package nearbyearthquakes.domain;

/**
 * Representation of the Earthquake in the app
 */
public class Earthquake {

    private final String title;
    private final double distance;
    private final double latitude;
    private final double longitude;

    public Earthquake(String title, double distance, double latitude, double longitude) {
        this.title = title;
        this.distance = distance;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public String getTitle() {
        return title;
    }

    public double getDistance() {
        return distance;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    @Override
    public String toString() {
        return title + " || " + (int) distance;
    }
}
