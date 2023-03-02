import SpotInterface from "../interfaces/SpotInterface";
import route from "./ComputeRouteData";
const spots: SpotInterface[] = [];

if (route.departureTimeStamp && route.arrivalTimeStamp && route.spotInterval) {
  for (
    let i = route.departureTimeStamp;
    i <= route.arrivalTimeStamp;
    i += route.spotInterval
  ) {
    spots.push({ id: i, timeStamp: i });
  }
}

export default spots;
