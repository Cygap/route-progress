/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ContextProvider } from "../providers/CurrentSpotContext";
import RoutProgressBar from "./RouteProgressBar";
import ShipPin from "./ShipPin";

export default function RouteIndicatorElement(params: object): JSX.Element {
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
      </ContextProvider>
    </div>
  );
}
