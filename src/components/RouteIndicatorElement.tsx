import RoutProgressBar from "./RouteProgressBar";
import ShipPin from "./ShipPin";

export default function RouteIndicatorElement(params: object): JSX.Element {
  return (
    <div>
      <ShipPin />
      <RoutProgressBar />
    </div>
  );
}
