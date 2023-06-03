interface LocationData {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

function calculateDistance(point1: LocationData, point2: LocationData): number {
  //Vincenty's formula for coordinate distance taking into account earth's curve
  const {
    latitude: lat1,
    longitude: lon1,
    latitudeDelta: latD1,
    longitudeDelta: lonD1,
  } = point1;
  const {
    latitude: lat2,
    longitude: lon2,
    latitudeDelta: latD2,
    longitudeDelta: lonD2,
  } = point2;

  const earthRadius = 6371; // Earth's radius in kilometers

  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  const deltaLon = toRadians(lon2 - lon1);
  const deltaLat = toRadians(lat2 - lat1);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = Number((earthRadius * c * 1000).toFixed(1)); // Distance in meters

  return distance;
}

function isCloseEnough(point1: LocationData, point2: LocationData): boolean {
  if (calculateDistance(point1, point2) < 150) return true;
  return false;
}

export { calculateDistance, isCloseEnough };
