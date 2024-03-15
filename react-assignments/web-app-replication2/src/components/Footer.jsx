import { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="icons">
          <FontAwesomeIcon icon="fa-brands fa-github" />
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
          <FontAwesomeIcon icon="fa-brands fa-youtube" />
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </div>
        <div>
          Copyright Mark Hill. This site was created by Mark Hill, but The Lord
          of the Rings IP, the films, and characters are in different parts{" "}
          <br />
          owned and Copyrighted by The Tolkien Estate, Harper Collins, Embracer
          Group, Warner Bros., and New Line Cinema
        </div>
      </div>
    );
  }
}

export default Footer;
