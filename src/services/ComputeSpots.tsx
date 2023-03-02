import SpotInterface from "../interfaces/SpotInterface";
import route from "./ComputeRouteData";
const spots: SpotInterface[] = [];

if (route.departureTimeStamp && route.arrivalTimeStamp && route.spotInterval) {
  for (
    let i = route.departureTimeStamp;
    i <= route.arrivalTimeStamp;
    i += route.spotInterval
  ) {
    spots.push({
      id: i,
      completed: true,
      displayPos: ((i - route.departureTimeStamp) / (route.duration ?? 1)) * 100
    });
  }
  spots
    .filter((spot) => spot.id > (route.now as number))
    .forEach((spot) => (spot.completed = false));
}

export default spots;
