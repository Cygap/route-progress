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
      completed: true
    });
  }
  spots
    .filter(
      (spot) => spot.id + (route.spotInterval as number) > (route.now as number)
    )
    .forEach((spot, i) => {
      i ? (spot.completed = false) : (spot.completed = true);
    });
}

export default spots;
