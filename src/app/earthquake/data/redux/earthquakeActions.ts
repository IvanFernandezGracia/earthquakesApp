import type {
  Earthquake,
  EarthquakeTypes,
} from "../../domain/earthquakeEntity";
import { getEarthquakes } from "../api/eathquakeAPIService";
import * as actionTypes from "./earthquakeActionTypes";

const getEarthquakeAction = () => async (dispatch: any) => {
  dispatch({ type: actionTypes.GET_EARTHQUAKES });

  //Action
  const earthquakes = await getEarthquakes();

  dispatch({ type: actionTypes.GET_EARTHQUAKES_SUCCESS, earthquakes });
  return earthquakes;
};

const getEarthquakeFilterByDataAction =
  (
    earthquakes: Earthquake[],
    firstAttribute: EarthquakeTypes,
    secondAttribute: EarthquakeTypes
  ) =>
  async (dispatch: any) => {
    //Action
    dispatch({
      type: actionTypes.GET_EARTHQUAKES_FILTER_SUCCESS,
      filteredEarthquakes: earthquakes.map((earthquake) => {
        return {
          [firstAttribute]: earthquake[firstAttribute],
          [secondAttribute]: earthquake[secondAttribute],
        };
      }),
    });

    return [earthquakes[0]];
  };

export { getEarthquakeAction, getEarthquakeFilterByDataAction };
