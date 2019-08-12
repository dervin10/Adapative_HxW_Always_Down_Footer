import React, { Component } from "react";

class Main extends Component {
  state = {
    cards: []
  };

  addCard = () => {
    let cards = this.state.cards;

    this.state.cards.push(<div className="card">This is the card</div>);

    this.setState({
      cards
    });
  };

  render() {
    return (
      <main>
        <button className="btn" onClick={() => this.addCard()}>
          Add Item
        </button>
        {this.state.cards.map(ele => ele)}
      </main>
    );
  }
}

export default Main;
