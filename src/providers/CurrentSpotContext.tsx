import { createContext, useReducer } from "react";
import Props from "../interfaces/PropsInterface";
import route from "../services/ComputeRouteData";
import spots from "../services/ComputeSpots";

const initialState = { timeStamp: route.now as number, currentId: spots[0].id };

function currentSpotReducer(
  state: typeof initialState,
  action: { type: string; payload?: object }
): typeof initialState {
  switch (action.type) {
    case "UPDATE":
      //   console.log(
      //     "%cCurrentSpotContext.tsx line:14 new Date(state.currentId",
      //     "color: #007acc;",
      //     new Date(state.currentId)
      //   );
      const newSpot = spots.find(
        (spot) => spot.id < Date.now() && spot.id > state.currentId
      );
      if (newSpot) {
        console.log(
          "%cCurrentSpotContext.tsx line:22 newSpot",
          "color: #007acc;",
          new Date(newSpot.id)
        );
      }
      return {
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
