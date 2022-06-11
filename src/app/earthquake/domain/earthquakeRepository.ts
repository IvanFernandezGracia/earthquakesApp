import type { Earthquake, EarthquakeTypes } from "./earthquakeEntity";

interface EarthquakeRepository {
  // State
  earthquakes: Earthquake[] | undefined;
  isLoading: boolean;
  filteredEarthquakes: Earthquake[] | undefined;
  // Actions
  loadInitialEarthquakes(): Promise<Earthquake[]>;
  filterByDataEarthquakes(
    earthquakes: Earthquake[],
    firstAttribute: EarthquakeTypes,
    secondAttribute: EarthquakeTypes
  ): Promise<Earthquake[]>;
}

export type { EarthquakeRepository };
