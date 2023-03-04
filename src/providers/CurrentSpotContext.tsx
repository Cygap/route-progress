import { createContext, useReducer } from "react";
import Props from "../interfaces/PropsInterface";
import route from "../services/ComputeRouteData";
import spots from "../services/ComputeSpots";

const startingSpot = Math.max(
  ...spots.filter((spot) => spot.completed).map((spot) => spot.id)
);
const initialState = {
  timeStamp: route.now as number,
  currentId:
    startingSpot === Infinity ? spots[spots.length - 1].id : startingSpot,
  spots,
  spotInterval: route.spotInterval,
  portOfLoading: route.portOfLoading,
  portOfDischarge: route.portOfDischarge
};

function currentSpotReducer(
  state: typeof initialState,
  action: { type: string; payload?: object }
): typeof initialState {
  switch (action.type) {
    case "UPDATE":
      const updatedSpots = [...state.spots];
      const newSpot = updatedSpots.find((spot) => {
        return spot.id < Date.now() && spot.id > state.currentId;
      });

      if (newSpot) {
        newSpot.completed = true;
      }
      return {
        ...state,
        spots: updatedSpots,
        timeStamp: Date.now(),
        currentId: newSpot ? newSpot.id : state.currentId
      };

    default:
      return state;
  }
}

const CurrentSpotContext = createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export function ContextProvider({ children, ...props }: Props) {
  const [state, dispatch] = useReducer(currentSpotReducer, initialState);
  return (
    <CurrentSpotContext.Provider value={{ state, dispatch }}>
      {children}
    </CurrentSpotContext.Provider>
  );
}

export default CurrentSpotContext;
