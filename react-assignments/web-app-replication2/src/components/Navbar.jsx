import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <button>Home</button>
        <button>About</button>
        <button>Store</button>
        <button>FAQs</button>
        <button>Contact</button>
      </div>
    );
  }
}

export default Navbar;
