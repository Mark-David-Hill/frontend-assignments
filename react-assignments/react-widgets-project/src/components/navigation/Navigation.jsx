import { Switch, Redirect, Route } from "react-router-dom";

import ColorChanger from "../pages/ColorChanger";
import ClockWidget from "../pages/ClockWidget";
import FontSizer from "../pages/FontSizer";
import TextAlign from "../pages/TextAlign";
import RgbSlider from "../pages/RgbSlider";
import Greeting from "../pages/Greeting";
import ShowHide from "../pages/ShowHide";
import Counter from "../pages/Counter";
import Weather from "../pages/Weather";
import NoPage from "../pages/NoPage";
import Login from "../pages/Login";

function Navigation() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/color-changer" component={ColorChanger} />
      <Route path="/clock" component={ClockWidget} />
      <Route path="/font-sizer" component={FontSizer} />
      <Route path="/text-align" component={TextAlign} />
      <Route path="/rgb-slider" component={RgbSlider} />
      <Route path="/greeting" component={Greeting} />
      <Route path="/show-hide" component={ShowHide} />
      <Route path="/counter" component={Counter} />
      <Route path="/weather" component={Weather} />

      <Route path="/no-page" component={NoPage} />
      <Route to="*" component={NoPage} />
    </Switch>
  );
}

export default Navigation;
