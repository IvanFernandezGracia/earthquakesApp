import type { AnyAction } from "redux";
import type { EarthquakeRepository } from "../../domain/earthquakeRepository";
import * as actionTypes from "./earthquakeActionTypes";

type EarthquakeRepositoryState = Omit<
  EarthquakeRepository,
  "loadInitialEarthquakes" | "filterByDataEarthquakes"
>;

const INITIAL_STATE: EarthquakeRepositoryState = {
  earthquakes: undefined,
  isLoading: false,
  filteredEarthquakes: undefined,
};

const earthquakeReducer = (
  state: EarthquakeRepositoryState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case actionTypes.GET_EARTHQUAKES:
      return { ...state, isLoading: true };
    case actionTypes.GET_EARTHQUAKES_SUCCESS:
      return { ...state, isLoading: false, earthquakes: action.earthquakes };
    case actionTypes.GET_EARTHQUAKES_FILTER_SUCCESS:
      return { ...state, filteredEarthquakes: action.filteredEarthquakes };
    default:
      return state;
  }
};

export { earthquakeReducer };
export type { EarthquakeRepositoryState };
