import { Line } from "react-chartjs-2";

const EarthquakeGraphView = ({
  filteredEarthquakesFirst,
  filteredEarthquakesSecond,
}: {
  filteredEarthquakesFirst: String[];
  filteredEarthquakesSecond: number[];
}) => {
  const data = {
    labels: filteredEarthquakesFirst,
    datasets: [
      {
        label: "Profundidad Sismo M1",
        data: filteredEarthquakesSecond,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return <Line data={data} />;
};

export default EarthquakeGraphView;
