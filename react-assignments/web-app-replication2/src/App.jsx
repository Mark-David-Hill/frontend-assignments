import { Component } from "react";

import "./App.css";

import ProfileCardList from "./components/ProfileCardList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.logInfo = this.logInfo.bind(this);
  }

  logInfo(title) {
    console.log(`This is ${title}'s info`);
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
