import RouteSpot from "./RouteSpot";
import spots from "../services/ComputeSpots";
import SpotInterface from "../interfaces/SpotInterface";
console.log("%cRouteProgressBar.tsx line:4 spots", "color: #007acc;", spots);
export default function RoutProgressBar(params: object): JSX.Element {
  return (
    <div>
      {spots.map(function (spot: SpotInterface, i: number) {
        console.log(
          "%cRouteProgressBar.tsx line:10 spot",
          "color: #007acc;",
          spot
        );
        return <RouteSpot key={spot.id} />;
      })}
    </div>
  );
}
