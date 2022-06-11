import React from "react";

import Spinner from "../../shared/ui/Spinner";

import { useEarthquakeViewModel } from "../controller/earthquakeViewModel";
import { useEarthquakeRepositoryImplementation } from "../data/redux/earthquakeRepositoryImpl";

import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import EarthquakeGridView from "./EarthquakeGridView";
import { Button } from "react-bootstrap";
import EarthquakeGraphView from "./EarthquakeGraphView";

const EarthquakeView = () => {
  const repository = useEarthquakeRepositoryImplementation();
  const {
    isLoading,
    getEarthquakes,
    earthquakesAttributes,
    earthquakesValues,
    getEarthquakesFilterByData,
    filteredEarthquakesFirst,
    filteredEarthquakesSecond,
  } = useEarthquakeViewModel(repository);

  React.useEffect(() => {
    getEarthquakes();
  }, [getEarthquakes]);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            {" "}
            <div className="row">
              <div className="col">
                <EarthquakeGridView
                  values={earthquakesValues}
                  attributes={earthquakesAttributes}
                ></EarthquakeGridView>
              </div>
            </div>
            <div className="row ">
              <div className="col">
                <Button
                  onClick={() => {
                    getEarthquakesFilterByData("date", "depth");
                  }}
                  className={
                    "py-2 mb-4 px-4 border rounded-md text-white bg-blue-600"
                  }
                >
                  Agregar Grafico Profundidad vs Fecha
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {filteredEarthquakesFirst && filteredEarthquakesSecond && (
                  <EarthquakeGraphView
                    filteredEarthquakesFirst={filteredEarthquakesFirst}
                    filteredEarthquakesSecond={filteredEarthquakesSecond}
                  ></EarthquakeGraphView>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EarthquakeView;
