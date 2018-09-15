import React, { Component } from "react";
import "./App.css";
import Column from "./Column";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards1: [["exampleText1"], ["exampleText2"]],
      cards2: [["exampleText1"], ["exampleText2"]],
      cards3: [["exampleText1"], ["exampleText2"]],
      cards4: [["exampleText1"], ["exampleText2"]]
    };

    this.addACard = this.addACard.bind(this);
  }

  incrementCardLocation(card, col) {
    console.log(card, col);
    let column = this.state.cardX;
    let nextColumn = this.state.cardX + 1;
    // mutate old and new array
    column.slice();
    // set state
  }

  decrementCardLocation() {
    alert("decrementing");
    // identify correct card
    // copy state
    // mutate old and new array
    // set state
  }

  addACard(num) {
    let text = window.prompt("Please write some text");
    if (text !== "") {
      if (num === 1) {
        let { cards1 } = this.state;
        cards1.push([text]);
        this.setState({ cards1 });
      }

      if (num === 2) {
        let { cards2 } = this.state;
        cards2.push([text]);
        this.setState({ cards2 });
      }

      if (num === 3) {
        let { cards3 } = this.state;
        cards3.push([text]);
        this.setState({ cards3 });
      }

      if (num === 4) {
        let { cards4 } = this.state;
        cards4.push([text]);
        this.setState({ cards4 });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Good luck on your Triplebyte Interview!</h1>
        </header>
        <div className="container">
          <Column
            name={"Winnie"}
            color={"purple"}
            item={1}
            addACard={this.addACard}
            cards={this.state.cards1}
            shouldHaveLeftButton={false}
            shouldHaveRightButton={true}
            incrementCardLocation={this.incrementCardLocation}
            decrementCardLocation={this.decrementCardLocation}
          />
          <Column
            name={"Bob"}
            color={"green"}
            item={2}
            addACard={this.addACard}
            cards={this.state.cards2}
            shouldHaveLeftButton={true}
            shouldHaveRightButton={true}
            incrementCardLocation={this.incrementCardLocation}
            decrementCardLocation={this.decrementCardLocation}
          />
          <Column
            name={"Thomas"}
            color={"blue"}
            item={3}
            addACard={this.addACard}
            cards={this.state.cards3}
            shouldHaveLeftButton={true}
            shouldHaveRightButton={true}
            incrementCardLocation={this.incrementCardLocation}
            decrementCardLocation={this.decrementCardLocation}
          />
          <Column
            name={"George"}
            color={"orange"}
            item={4}
            addACard={this.addACard}
            cards={this.state.cards4}
            shouldHaveLeftButton={true}
            shouldHaveRightButton={false}
            incrementCardLocation={this.incrementCardLocation}
            decrementCardLocation={this.decrementCardLocation}
          />
        </div>
      </div>
    );
  }
}

export default App;
