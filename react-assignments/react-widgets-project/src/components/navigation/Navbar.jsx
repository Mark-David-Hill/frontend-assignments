import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/greeting">Greeting</NavLink>
      <NavLink to="/show-hide">Show/Hide</NavLink>
      <NavLink to="font-sizer">Font Sizer</NavLink>
      <NavLink to="/text-align">Text Alignment</NavLink>
      <NavLink to="/clock">Clock</NavLink>
      <NavLink to="/color-changer">Color Changer</NavLink>
      <NavLink to="/rgb-slider">RGB-Slider</NavLink>
      <NavLink to="/weather">Weather</NavLink>
    </div>
  );
}

export default Navbar;
