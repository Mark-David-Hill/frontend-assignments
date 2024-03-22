import { BrowserRouter } from "react-router-dom";

import icons from "./helpers/icons/icons.js";

import Navigation from "./components/navigation/Navigation.jsx";
import Navbar from "./components/navigation/Navbar.jsx";

import "./styles/main.scss";

icons();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
