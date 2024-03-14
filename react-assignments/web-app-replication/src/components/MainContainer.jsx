import { Component } from "react";

import MainContent from "./MainContent";
import Headers from "./Headers";
import Button from "./Button";
import Footer from "./Footer";
import Image from "./Image";

class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <Image />
        <Headers />
        <MainContent />
        <div className="grid">
          <MainContent />
          <Image />
          <Image />
          <MainContent />
        </div>
        <MainContent />
        <Button />
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
