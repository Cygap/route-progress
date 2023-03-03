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
    marginBottom: "1rem",
    display: "grid",
    gridTemplateColumns: "repeat(13, 1fr)",
    justifyItems: "center"
  });

  return (
    <div css={styles}>
      <ShipIcon
        css={{
          height: "3.5rem",
          width: "3.5rem",
          fill: "steelblue"
        }}
        style={{
          gridColumnStart:
            state.spots.map((spot) => spot.id).indexOf(state.currentId) + 1
        }}
      />
      {/* <div>{spots.map((spot) => new Date(spot.id)).join(", ")}</div> */}
    </div>
  );
}
