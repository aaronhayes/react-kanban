import React, { Component, createContext } from 'react';

const Context = createContext();

class Provider extends Component {
    constructor(props) {
        super(props);

        let cards = [
          [],
          [],
          [],
          []
        ];

        if (window.localStorage.getItem('cards')) {
          cards = JSON.parse(window.localStorage.getItem('cards'));
        }

        this.state = {
            cards,
            onAddCard: this.onAddCard,
            onMoveCardLeft: this.onMoveCardLeft,
            onMoveCardRight: this.onMoveCardRight
        };
    }

    componentDidUpdate() {
      window.localStorage.setItem('cards', JSON.stringify(this.state.cards));
    }

    onAddCard = (index, cardText) => {
        const newCardList = this.state.cards[index];
        newCardList.push(cardText);
        const cards = this.state.cards;
        cards[index] = newCardList;
        this.setState({ cards });
    };

    onMoveCardLeft = (currentIndex, cardIndex) => {
        const card = this.state.cards[currentIndex].splice(cardIndex, 1);
        const newIndex = currentIndex - 1;
        if (newIndex < 0) {
            return;
        }
        this.onAddCard(newIndex, card);
    };

    onMoveCardRight = (currentIndex, cardIndex) => {
        const card = this.state.cards[currentIndex].splice(cardIndex, 1);
        const newIndex = currentIndex + 1;
        if (newIndex > 3) {
            return;
        }
        this.onAddCard(newIndex, card);
    };


    render() {
        return (
          <Context.Provider value={this.state}>
            {this.props.children}
          </Context.Provider>
        );
    }
}

const Consumer = Context.Consumer;

export { Context, Provider, Consumer };