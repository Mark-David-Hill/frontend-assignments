import { Component } from "react";

import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";

import "./styles/main.scss";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
