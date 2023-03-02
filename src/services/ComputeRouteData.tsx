import RouteInterface from "../interfaces/RouteInterface";
import initialRoute from "./GetRoute";

const route: RouteInterface = { ...initialRoute };
route.departureTimeStamp = new Date(initialRoute.departureTime).getTime();
route.arrivalTimeStamp = new Date(initialRoute.arrivalTime).getTime();
route.duration = route.arrivalTimeStamp - route.departureTimeStamp;
route.spotInterval = route.duration / 12;
route.now = Date.now();

export default route;