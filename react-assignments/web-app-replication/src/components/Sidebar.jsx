import { Component } from "react";

import Button from "./Button";
import Logo from "./Logo";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Logo />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Logo />
      </div>
    );
  }
}

export default Sidebar;
