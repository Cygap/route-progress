/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import facepaint from "facepaint";
import { ContextProvider } from "../providers/CurrentSpotContext";
import Ports from "./Ports";
import RoutProgressBar from "./RouteProgressBar";
import ShipPin from "./ShipPin";

export default function RouteIndicatorElement(): JSX.Element {
  const breakpoints = [576, 768, 992, 1200];
  //very attractive workaround for a shorter code for different media. Unfortunately, it seem to slow down the app at the first run, while the CSS is being generated.
  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
  const styles = css({
    color: "steelblue",
    position: "relative",
    alignSelf: "center"
  });

  const elementWidth = mq({
    width: ["95%", "90%", "80%", "50%"]
  });

  Object.assign(styles, elementWidth);
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
