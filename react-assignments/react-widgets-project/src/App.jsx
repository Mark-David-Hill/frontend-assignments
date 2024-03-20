import "./App.css";

import ShowHideWidget from "./components/ShowHideWidget.jsx";
import GretingWidget from "./components/GreetingWidget.jsx";
import Counter from "./components/CounterWidget.jsx";

function App() {
  return (
    <div className="App">
      <Counter />
      <GretingWidget />
      <ShowHideWidget />
    </div>
  );
}

export default App;
