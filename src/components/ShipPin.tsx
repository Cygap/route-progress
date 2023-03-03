/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useEffect } from "react";
import CurrentSpotContext from "../providers/CurrentSpotContext";
import { ReactComponent as ShipIcon } from "../assets/ship-solid.svg";

export default function ShipPin(params: object) {
  const { state, dispatch } = useContext(CurrentSpotContext);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: "UPDATE" });
    }, state.spotInterval);
  }, [state, dispatch]);

  const styles = css({
    position: "relative",
    height: "3.5rem",
    width: "3.5rem",
    marginBottom: "2rem",
    fill: "steelblue"
  });
  const leftOffset = `${
    state.spots.find((spot) => spot.id === state.currentId)?.displayPos
  }%`;
  const posStyles = { left: leftOffset };
  return (
    <div css={styles} style={posStyles}>
      <ShipIcon css={{ position: "relative" }} />
      {/* <div>{spots.map((spot) => new Date(spot.id)).join(", ")}</div> */}
    </div>
  );
}
