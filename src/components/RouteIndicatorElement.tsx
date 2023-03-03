/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ContextProvider } from "../providers/CurrentSpotContext";
import Ports from "./Ports";
import RoutProgressBar from "./RouteProgressBar";
import ShipPin from "./ShipPin";

export default function RouteIndicatorElement(): JSX.Element {
  const styles = css({
    color: "steelblue",
    position: "relative",
    alignSelf: "center",
    width: "70%",
    border: "1px solid red"
  });
  return (
    <div css={styles}>
      <ContextProvider>
        <ShipPin />
        <RoutProgressBar />
        <Ports />
      </ContextProvider>
    </div>
  );
}
