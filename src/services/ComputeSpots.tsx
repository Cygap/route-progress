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
    .filter(
      (spot) => spot.id + (route.spotInterval as number) > (route.now as number)
    )
    .forEach((spot, i) => {
      console.log("%cComputeSpots.tsx line:20 i", "color: #007acc;", i);
      i ? (spot.completed = false) : (spot.completed = true);
      console.log(
        "%cComputeSpots.tsx line:22 spot.completed",
        "color: #007acc;",
        spot.completed
      );
    });
}

export default spots;
