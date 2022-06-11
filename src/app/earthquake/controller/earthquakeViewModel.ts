import React from "react";

import type { EarthquakeRepository } from "../domain/earthquakeRepository";
import { getEarthquakesUseCase } from "../useCases/getEarthquakesUseCase";
import { EarthquakeGridEntity } from "./earthquakeGridEntity";
import { getEarthquakesFilterByDataUseCase } from "../useCases/getEarthquakesFilterByDataUseCase";
import { EarthquakeTypes } from "../domain/earthquakeEntity";
import moment from "moment-timezone";
import "moment/locale/es";
moment.locale("es");

// Dependency injection (repository)
function useEarthquakeViewModel(repository: EarthquakeRepository) {
  const getEarthquakes = React.useCallback(
    function () {
      getEarthquakesUseCase({
        loadInitialEarthquakes: repository.loadInitialEarthquakes,
      });
    },
    [repository.loadInitialEarthquakes]
  );

  const getEarthquakesFilterByData = React.useCallback(
    function (
      firstAttribute: EarthquakeTypes,
      secondAttribute: EarthquakeTypes
    ) {
      getEarthquakesFilterByDataUseCase(
        {
          filterByDataEarthquakes: repository.filterByDataEarthquakes,
          earthquakes: repository.earthquakes,
        },
        firstAttribute,
        secondAttribute
      );
    },
    [repository.filterByDataEarthquakes, repository.earthquakes]
  );

  return {
    earthquakes: repository.earthquakes,
    isLoading: repository.earthquakes === undefined || repository.isLoading,
    getEarthquakes,
    getEarthquakesFilterByData,
    filteredEarthquakes: repository.filteredEarthquakes,
    filteredEarthquakesFirst: repository.filteredEarthquakes
      ? repository.filteredEarthquakes
          .sort((b, a) => b.date.getTime() - a.date.getTime())
          .map((earthquake) => {
            return moment(earthquake.date)
              .tz("America/Santiago")
              .format("Do MMMM YYYY, h:mm:ss");
          })
      : [],
    filteredEarthquakesSecond: repository.filteredEarthquakes
      ? repository.filteredEarthquakes
          .sort((b, a) => b.date.getTime() - a.date.getTime())
          .map((earthquake) => {
            return earthquake.depth;
          })
      : [],
    earthquakesValues: repository.earthquakes
      ? repository.earthquakes.map((earthquake) => {
          let earthquakeGrid: EarthquakeGridEntity = {
            Fecha: moment(earthquake.date)
              .tz("America/Santiago")
              .format("Do MMMM YYYY, h:mm:ss"),
            Profundidad: earthquake.depth,
            Magnitud: earthquake.magnitude,
            ReferenciaGeografica: earthquake.refGeography,
          };
          return Object.values(earthquakeGrid);
        })
      : [],
    earthquakesAttributes: [
      "Fecha (Hora Santiago/Chile)",
      "Profundidad",
      "Magnitud M1",
      "Referencia Geografica",
    ],
  };
}

export { useEarthquakeViewModel };
