import React from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../../main/data/redux/appRepositoryImplementation";
import type { EarthquakeRepository } from "../../domain/earthquakeRepository";
import { Earthquake, EarthquakeTypes } from "../../domain/earthquakeEntity";
import type { EarthquakeRepositoryState } from "./earthquakeReducer";
import {
  getEarthquakeAction,
  getEarthquakeFilterByDataAction,
} from "./earthquakeActions";

const earthquakeSelector = (state: AppRootState) => state.earthquake;

const useEarthquakeRepositoryImplementation = (): EarthquakeRepository => {
  const { earthquakes, isLoading, filteredEarthquakes } = useSelector<
    AppRootState,
    EarthquakeRepositoryState
  >(earthquakeSelector);
  const dispatch = useDispatch();

  const loadInitialEarthquakes = React.useCallback(
    () => getEarthquakeAction()(dispatch),
    [dispatch]
  );

  const filterByDataEarthquakes = React.useCallback(
    (
      earthquakes: Earthquake[],
      firstAttribute: EarthquakeTypes,
      secondAttribute: EarthquakeTypes
    ) =>
      getEarthquakeFilterByDataAction(
        earthquakes,
        firstAttribute,
        secondAttribute
      )(dispatch),
    [dispatch]
  );

  return {
    earthquakes,
    isLoading,
    filteredEarthquakes,
    loadInitialEarthquakes,
    filterByDataEarthquakes,
  };
};

export { useEarthquakeRepositoryImplementation };
