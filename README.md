# Custom element showing transport route progress

This progress bar shows the presumed position of a vehicle based on it's scheduled departure and arrival times. The assumed position is calculated as a ratio of time passed since the departure relative to the time of the arrival.
The element requires an input object of a following type:

```TS
interface RouteInterface {
  portOfLoading: string;
  portOfDischarge: string;
  departureTime: string | Date;
  arrivalTime: string | Date;
}
```

if either `departureTime` or `arrivalTime` is a string than it should conform to ISO 8601 format (https://tc39.es/ecma262/#sec-date-time-string-format) and include indication of a timeZone. If no timesone is indicated, than it will be presumed to have the same timezone as a runtime.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
