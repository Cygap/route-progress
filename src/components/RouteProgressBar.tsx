/** @jsxImportSource @emotion/react */

import RouteSpot from "./RouteSpot";

import SpotInterface from "../interfaces/SpotInterface";
import Props from "../interfaces/PropsInterface";
import { useContext } from "react";
import CurrentSpotContext from "../providers/CurrentSpotContext";

export default function RoutProgressBar(props: Props): JSX.Element {
  const fontSize = 1;

  const { state } = useContext(CurrentSpotContext);
  return (
    <div
      css={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
      {state.spots.map(function (spot: SpotInterface, i: number) {
        return (
          <span
            css={{
              fontSize:
                i === 0 || i === state.spots.length - 1
                  ? fontSize * 2 + "rem"
                  : fontSize + "rem",
              fontWeight: "bolder"
            }}
            key={spot.id}
            style={{
              color: spot.completed ? undefined : "lightsteelblue"
            }}>
            <RouteSpot />
          </span>
        );
      })}
    </div>
  );
}
