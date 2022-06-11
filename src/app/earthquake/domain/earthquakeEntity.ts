export interface Earthquake {
  date: Date;
  latitude: number;
  longitude: number;
  depth: number;
  magnitude: number;
  agency: string;
  refGeography: string;
  dateUpdate: Date;
}

export type EarthquakeTypes =
  | "date"
  | "latitude"
  | "longitude"
  | "depth"
  | "magnitude"
  | "agency"
  | "refGeography"
  | "dateUpdate";
