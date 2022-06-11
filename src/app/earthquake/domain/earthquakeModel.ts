import type { Earthquake } from "./earthquakeEntity";

// Create
const create = (earthquake: Earthquake) => ({
  date: earthquake.date,
  latitude: earthquake.latitude,
  longitude: earthquake.longitude,
  depth: earthquake.depth,
  magnitude: earthquake.magnitude,
  agency: earthquake.agency,
  refGeography: earthquake.refGeography,
  dateUpdate: earthquake.dateUpdate,
});

// Method or Bussines Logic Entity

export { create };
