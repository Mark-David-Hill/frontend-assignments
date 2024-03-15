import { Component } from "react";

class ProfileCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="header-wrapper">
          <img
            src={this.props.imageSource}
            alt={this.props.title + "'s Profile Pic"}
          />
          <div className="card-title-wrapper">
            <h3>{this.props.title}</h3>
          </div>
        </div>
        <div className="description-wrapper">
          <p>{this.props.description}</p>
        </div>
        <button
          onClick={() =>
            this.props.logger(this.props.title, this.props.description)
          }
        >
          Log Me
        </button>
      </div>
    );
  }
}

export default ProfileCard;
