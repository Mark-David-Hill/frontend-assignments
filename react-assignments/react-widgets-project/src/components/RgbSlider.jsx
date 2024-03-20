import { useEffect, useState } from "react";

function RgbSlider() {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);
  const [color, setColor] = useState("rgb(0, 0, 0)");

  useEffect(() => {
    setColor("rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")");
  }, [redValue, greenValue, blueValue]);

  return (
    <div>
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <h3>
        rgb({redValue}, {greenValue}, {blueValue})
      </h3>
      <input
        type="range"
        min="0"
        max="255"
        onChange={(e) => setRedValue(e.target.value)}
        className="slider"
        id="redSlider"
      />
      <input
        type="range"
        min="0"
        max="255"
        onChange={(e) => setGreenValue(e.target.value)}
        className="slider"
        id="greenSlider"
      />
      <input
        type="range"
        min="0"
        max="255"
        onChange={(e) => setBlueValue(e.target.value)}
        className="slider"
        id="blueSlider"
      />
    </div>
  );
}

export default RgbSlider;
