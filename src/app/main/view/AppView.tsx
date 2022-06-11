import { Provider } from "react-redux";
import EarthquakeView from "../../earthquake/view/EarthquakeView";

import { appRepositoryImplementation } from "../data/redux/appRepositoryImplementation";

function AppView() {
  return (
    <Provider store={appRepositoryImplementation}>
      <EarthquakeView />
    </Provider>
  );
}

export default AppView;
