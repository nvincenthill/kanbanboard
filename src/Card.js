import React from "react";
class Card extends React.Component {
  render() {
    const leftButton = this.props.shouldHaveLeftButton ? (
      <button
        className="left-button"
        onClick={() => this.props.decrementCardLocation(this.props.index)}
      >
        {"<-"}
      </button>
    ) : null;
    const rightButton = this.props.shouldHaveRightButton ? (
      <button
        className="right-button"
        onClick={() =>
          this.props.incrementCardLocation(this.props.index, this.props.col)
        }
      >
        {"->"}
      </button>
    ) : null;
    return (
      <div className="card">
        <p>{this.props.text}</p>

        {leftButton}
        {rightButton}
      </div>
    );
  }
}
export default Card;
