import RouteInterface from "../interfaces/RouteInterface";
import initialRoute from "./GetRoute";

export class Route implements RouteInterface {
  portOfLoading!: string;
  portOfDischarge!: string;
  departureTime!: string | Date;
  arrivalTime!: string | Date;
  departureTimeStamp: number;
  arrivalTimeStamp: number;
  duration: number;
  spotInterval: number;
  now: number;
  constructor(params: RouteInterface) {
    Object.assign(this, params);
    this.departureTimeStamp = new Date(initialRoute.departureTime).getTime();

    if (isNaN(this.departureTimeStamp)) {
      this.departureTimeStamp = 0;
      console.log(
        "%cdepartureTime: wrong datetime string format, unable to show progress",
        "color: #ff0000;"
      );
    }

    this.arrivalTimeStamp = new Date(initialRoute.arrivalTime).getTime();
    if (isNaN(this.arrivalTimeStamp)) {
      this.arrivalTimeStamp = 0;

      console.log(
        "%carrivalTime: wrong datetime string format, unable to show progress",
        "color: #ff0000;"
      );
    }
    this.duration = this.arrivalTimeStamp - this.departureTimeStamp;
    this.spotInterval = this.duration / 12;
    this.now = Date.now();
  }
}

const route = new Route(initialRoute);

export default route;
