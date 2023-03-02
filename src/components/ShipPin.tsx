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
    color: "navy",
    height: "5rem",
    width: "5rem"
  });
  const leftOffset = `${
    spots.find((spot) => spot.id === state.currentId)?.displayPos
  }%`;
  const posStyles = { left: leftOffset };
  return (
    <div css={styles} style={posStyles}>
      <ShipIcon />
      {/* <div>{spots.map((spot) => new Date(spot.id)).join(", ")}</div> */}
    </div>
  );
}
