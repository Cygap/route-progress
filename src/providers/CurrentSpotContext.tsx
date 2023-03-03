import { createContext, useReducer } from "react";
import Props from "../interfaces/PropsInterface";
import route from "../services/ComputeRouteData";
import spots from "../services/ComputeSpots";

const startingSpot = Math.min(
  ...spots.filter((spot) => !spot.completed).map((spot) => spot.id)
);
const initialState = {
  timeStamp: route.now as number,
  currentId:
    startingSpot === Infinity ? spots[spots.length - 1].id : startingSpot,
  spots,
  spotInterval: route.spotInterval
};
console.log(
  "%cCurrentSpotContext.tsx line:15 initialState",
  "color: #007acc;",
  initialState
);
function currentSpotReducer(
  state: typeof initialState,
  action: { type: string; payload?: object }
): typeof initialState {
  switch (action.type) {
    case "UPDATE":
      const newSpot = state.spots.find((spot) => {
        return spot.id < Date.now() && spot.id > state.currentId;
      });

      if (newSpot) {
        newSpot.completed = true;
        console.log(
          "%cCurrentSpotContext.tsx line:22 newSpot vs state",
          "color: #007acc;",
          new Date(newSpot.id),
          new Date(state.timeStamp),
          newSpot.completed
        );
      }
      return {
        timeStamp: Date.now(),
        currentId: newSpot ? newSpot.id : state.currentId,
        spots,
        spotInterval: state.spotInterval
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
