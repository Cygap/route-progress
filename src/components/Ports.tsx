/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import Props from "../interfaces/PropsInterface";
import CurrentSpotContext from "../providers/CurrentSpotContext";

export default function Ports(props: Props) {
  const { state } = useContext(CurrentSpotContext);
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between"
      }}>
      <p>{state.portOfLoading}</p>
      <p>{state.portOfDischarge}</p>
    </div>
  );
}
