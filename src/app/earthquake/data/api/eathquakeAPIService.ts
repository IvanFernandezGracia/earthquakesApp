import axios from "axios";
import type { Earthquake } from "../../domain/earthquakeEntity";
import { create } from "../../domain/earthquakeModel";
import { EarthquakeAPIEntity } from "./earthquakeAPIEntity";

async function getEarthquakes(): Promise<Earthquake[]> {
  let earthquakes: Earthquake[];
  try {
    const { data }: { data: EarthquakeAPIEntity[] } = await axios.get(
      "https://api.gael.cloud/general/public/sismos"
    );

    earthquakes = data.map((earthquake) => {
      return create({
        date: new Date(earthquake.Fecha),
        latitude: Number(earthquake.Latitud),
        longitude: Number(earthquake.Longitud),
        depth: Number(earthquake.Profundidad),
        magnitude: Number(earthquake.Magnitud.replace(/\D/g, "")),
        agency: earthquake.Agencia,
        refGeography: earthquake.RefGeografica,
        dateUpdate: new Date(earthquake.FechaUpdate),
      });
    });

    return earthquakes;
  } catch (error) {
    return [];
  }
}


export { getEarthquakes };
