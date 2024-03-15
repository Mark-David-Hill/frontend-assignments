import { Component } from "react";

import "./styles/main.scss";

import ProfileCardList from "./components/ProfileCardList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.logInfo = this.logInfo.bind(this);
  }

  logInfo(title, description) {
    console.log(`Name: ${title}\n\nDescription: ${description}`);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>The Fellowship of the Ring</h1>
        <ProfileCardList logger={this.logInfo} />
        <Footer />
      </div>
    );
  }
}

export default App;
