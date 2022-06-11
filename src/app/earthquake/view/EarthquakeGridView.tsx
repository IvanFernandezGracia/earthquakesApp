import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { css } from "@emotion/css";

const EarthquakeGridView = ({
  values,
  attributes,
}: {
  values: string[][];
  attributes: string[];
}) => {
  return (
    <Grid
      data={values}
      columns={attributes}
      search={true}
      pagination={{
        enabled: true,
        limit: 6,
      }}
      className={{
        container: css`
          * {
            font-family: "Tahoma";
          }
        `,
        table: css`
          tr:hover td {
            background-color: rgba(0, 0, 0, 0.1);
          }
        `,
        th: css`
          text-align: center;
          background-color: rgba(0, 0, 0, 0.9);
          &:hover {
            background-color: #999;
            color: #fff;
          }
        `,
        td: css`
          color: rgba(0, 0, 0, 0.9);
          &:hover {
            color: #000;
          }
        `,
      }}
    />
  );
};

export default EarthquakeGridView;
