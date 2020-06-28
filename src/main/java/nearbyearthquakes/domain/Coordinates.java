package nearbyearthquakes.domain;

public class Coordinates {
    private final double latitude;
    private final double longitude;

    public Coordinates(Earthquake earthquake) {
        this.latitude = earthquake.getLatitude();
        this.longitude = earthquake.getLongitude();
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    /**
     * hashCode used for the uniqueness in the list
     *
     * @return
     */
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + Double.valueOf(latitude).hashCode();
        result = prime * result + Double.valueOf(longitude).hashCode();
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Coordinates other = (Coordinates) obj;
        if (latitude != other.latitude)
            return false;
        if (longitude != other.longitude)
            return false;
        return true;
    }
}
