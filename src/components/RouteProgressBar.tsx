/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import RouteSpot from "./RouteSpot";
import spots from "../services/ComputeSpots";
import SpotInterface from "../interfaces/SpotInterface";
import Props from "../interfaces/PropsInterface";

export default function RoutProgressBar(props: Props): JSX.Element {
  return (
    <div>
      {spots.map(function (spot: SpotInterface, i: number) {
        return (
          <span
            css={{
              position: "absolute",
              fontSize: "8rem",
              fontWeight: "bolder"
            }}
            key={spot.id}
            style={{ left: `${spot.displayPos}%` }}>
            <RouteSpot />
          </span>
        );
      })}
    </div>
  );
}
