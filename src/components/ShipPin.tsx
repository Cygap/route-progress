/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useEffect } from "react";
import CurrentSpotContext from "../providers/CurrentSpotContext";
import { ReactComponent as ShipIcon } from "../assets/ship-solid.svg";
import Props from "../interfaces/PropsInterface";

export default function ShipPin(props: Props) {
  const { state, dispatch } = useContext(CurrentSpotContext);
  useEffect(() => {
    const currentSpotIndex = state.spots
      .map((spot) => spot.id)
      .indexOf(state.currentId);

    if (currentSpotIndex < state.spots.length - 1) {
      const delay = state.spots[currentSpotIndex + 1].id - Date.now() + 10;

      const timeoutID = setTimeout(() => {
        dispatch({ type: "UPDATE" });
      }, delay);
      return () => clearTimeout(timeoutID);
    }
  }, [state, dispatch]);

  const styles = css({
    marginBottom: "1rem",
    display: "grid",
    gridTemplateColumns: "repeat(13, 1fr)",
    justifyItems: "center"
  });
  // according to https://emotion.sh/docs/best-practices#use-the-style-prop-for-dynamic-styles the variable styles are passed to elements with the style prop
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
    </div>
  );
}
