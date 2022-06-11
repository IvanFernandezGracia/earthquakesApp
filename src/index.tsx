import { render } from "react-dom";

import "./styles.css";
import AppView from "./app/main/view/AppView";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
render(<AppView />, rootElement);
