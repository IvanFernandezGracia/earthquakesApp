import type { EarthquakeRepository } from "../domain/earthquakeRepository";

type getEarthquakeRepository = Pick<EarthquakeRepository, "loadInitialEarthquakes">;

const getEarthquakesUseCase = (repository: getEarthquakeRepository) => {
  repository.loadInitialEarthquakes();
};

export { getEarthquakesUseCase };
