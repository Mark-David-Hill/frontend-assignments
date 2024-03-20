import "./App.css";

import ColorChanger from "./components/ColorChanger.jsx";
import ClockWidget from "./components/ClockWidget.jsx";
import FontSizer from "./components/FontSizer.jsx";
import TextAlign from "./components/TextAlign.jsx";
import RgbSlider from "./components/RgbSlider.jsx";
import ShowHide from "./components/ShowHide.jsx";
import Greeting from "./components/Greeting.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting />
      <ShowHide />
      <FontSizer />
      <TextAlign />
      <ClockWidget />
      <ColorChanger />
      <RgbSlider />
    </div>
  );
}

export default App;
