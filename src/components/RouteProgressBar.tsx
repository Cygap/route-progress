import RouteSpot from "./RouteSpot";
import spots from "../services/ComputeSpots";
import SpotInterface from "../interfaces/SpotInterface";

export default function RoutProgressBar(params: object): JSX.Element {
  return (
    <div>
      {spots.map(function (spot: SpotInterface, i: number) {
        return <RouteSpot key={spot.id} />;
      })}
    </div>
  );
}
