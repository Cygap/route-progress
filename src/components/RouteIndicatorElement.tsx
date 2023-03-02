/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ContextProvider } from "../providers/CurrentSpotContext";
import RoutProgressBar from "./RouteProgressBar";
import ShipPin from "./ShipPin";

export default function RouteIndicatorElement(params: object): JSX.Element {
  const styles = css({ color: "navy", position: "relative" });
  return (
    <div css={styles}>
      <ContextProvider>
        <ShipPin />
        <div></div>
        <RoutProgressBar />
      </ContextProvider>
    </div>
  );
}
