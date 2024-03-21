import { useEffect, useState } from "react";

function RgbSlider() {
  const [redValue, setRedValue] = useState(50);
  const [greenValue, setGreenValue] = useState(50);
  const [blueValue, setBlueValue] = useState(50);
  const [color, setColor] = useState("rgb(50, 50, 50)");

  useEffect(() => {
    setColor("rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")");
  }, [redValue, greenValue, blueValue]);

  return (
    <div className="widget-container rgb-slider">
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <h3>
        rgb({redValue}, {greenValue}, {blueValue})
      </h3>
      <div className="horizontal red">
        <label htmlFor="red-slider">R</label>
        <input
          type="range"
          min="0"
          max="255"
          onChange={(e) => setRedValue(e.target.value)}
          className="red-slider"
          id="red-slider"
        />
      </div>
      <div className="horizontal green">
        <label htmlFor="green-slider">G</label>
        <input
          type="range"
          min="0"
          max="255"
          onChange={(e) => setGreenValue(e.target.value)}
          className="slider"
          id="green-slider"
        />
      </div>
      <div className="horizontal blue">
        <label htmlFor="blue-slider">B</label>
        <input
          type="range"
          min="0"
          max="255"
          onChange={(e) => setBlueValue(e.target.value)}
          className="slider"
          id="blue-slider"
        />
      </div>
    </div>
  );
}

export default RgbSlider;
