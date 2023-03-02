/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useEffect } from "react";
import CurrentSpotContext from "../providers/CurrentSpotContext";
import route from "../services/ComputeRouteData";
import spots from "../services/ComputeSpots";
import { ReactComponent as ShipIcon } from "../ship-solid.svg";

export default function ShipPin(params: object) {
  const { state, dispatch } = useContext(CurrentSpotContext);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: "UPDATE" });
    }, route.spotInterval);
  }, [state, dispatch]);

  const styles = css({
    position: "relative",
    height: 50,
    width: 50
  });
  const leftOffset = `${
    spots.map((spot) => spot.id).indexOf(state.currentId) * 1.5
  }rem`;
  const posStyles = { left: leftOffset };
  return (
    <div css={styles} style={posStyles}>
      <ShipIcon />
      {/* <div>{spots.map((spot) => new Date(spot.id)).join(", ")}</div> */}
    </div>
  );
}
