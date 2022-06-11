import {  EarthquakeTypes } from "../domain/earthquakeEntity";
import type { EarthquakeRepository } from "../domain/earthquakeRepository";

type getEarthquakeRepository = Pick<
  EarthquakeRepository,
  "filterByDataEarthquakes" | "earthquakes"
>;

const getEarthquakesFilterByDataUseCase = (
  repository: getEarthquakeRepository,
  firstAttribute: EarthquakeTypes,
  secondAttribute: EarthquakeTypes
) => {
  if (repository.earthquakes) {
    repository.filterByDataEarthquakes(
      repository.earthquakes,
      firstAttribute,
      secondAttribute
    );
  }
};

export { getEarthquakesFilterByDataUseCase };
