import icons from "./helpers/icons/icons.js";

import ColorChanger from "./components/ColorChanger.jsx";
import ClockWidget from "./components/ClockWidget.jsx";
import FontSizer from "./components/FontSizer.jsx";
import TextAlign from "./components/TextAlign.jsx";
import RgbSlider from "./components/RgbSlider.jsx";
import ShowHide from "./components/ShowHide.jsx";
import Greeting from "./components/Greeting.jsx";
import Counter from "./components/Counter.jsx";

import "./styles/main.scss";

icons();

function App() {
  return (
    <div className="App">
      <h1>Widgets</h1>
      <div className="widgets-wrapper">
        <Counter />
        <Greeting />
        <ShowHide />
        <FontSizer />
        <TextAlign />
        <ClockWidget />
        <ColorChanger />
        <RgbSlider />
      </div>
    </div>
  );
}

export default App;
