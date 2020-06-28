package nearbyearthquakes.helper;

import net.sf.geographiclib.Geodesic;
import net.sf.geographiclib.GeodesicLine;
import net.sf.geographiclib.GeodesicMask;

/**
 * Helper to calculate the distance
 */
public class GeoDistanceHelper {

    private static Geodesic geod = Geodesic.WGS84;

    public static double getDistanceInKm(double lat1, double lon1, double lat2, double lon2) {
        GeodesicLine line = geod.InverseLine(lat1, lon1, lat2, lon2, GeodesicMask.DISTANCE_IN);
        return line.Distance() / 1000;
    }
}
