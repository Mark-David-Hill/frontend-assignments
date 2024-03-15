import { Component } from "react";

import icons from "./helpers/icons";
import "./styles/main.scss";

import ProfileCardList from "./components/ProfileCardList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

icons();

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
        <div className="profile-card-list-container">
          <ProfileCardList logger={this.logInfo} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
