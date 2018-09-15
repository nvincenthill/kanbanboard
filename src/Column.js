import React from "react";
import Card from "./Card";
class Column extends React.Component {
  render() {
    const cards = this.props.cards.map((card, idx) => {
      return (
        <Card
          name={`card${idx}`}
          text={card[0]}
          key={idx}
          index={idx}
          col={this.props.item}
          shouldHaveLeftButton={this.props.shouldHaveLeftButton}
          shouldHaveRightButton={this.props.shouldHaveRightButton}
          incrementCardLocation={this.props.incrementCardLocation}
          decrementCardLocation={this.props.decrementCardLocation}
        />
      );
    });

    return (
      <div className={`item${this.props.item}`}>
        <div className={this.props.color}>
          <h1>{this.props.name}</h1>
        </div>

        {cards}
        <button
          className="button"
          onClick={() => this.props.addACard(this.props.item)}
        >
          + Add a button
        </button>
      </div>
    );
  }
}
export default Column;
