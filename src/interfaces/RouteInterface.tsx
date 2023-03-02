export default interface RouteInterface {
  portOfLoading: string;
  portOfDischarge: string;
  departureTime: string | Date;
  arrivalTime: string | Date;
  departureTimeStamp?: number | undefined;
  arrivalTimeStamp?: number | undefined;
  duration?: number | undefined;
  now?: number | undefined;
  spotInterval?: number | undefined;
}
