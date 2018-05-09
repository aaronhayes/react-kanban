import React, {Component, Fragment} from 'react';
import { Row } from 'reactstrap';
import BoardCol from './BoardCol';
import Card from "./Card";
import {Consumer} from "../ApplicationContext";

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        <Row>
          <Consumer>
            {({ onAddCard, onMoveCardLeft, onMoveCardRight, cards }) => (
              <Fragment>
                <BoardCol title="Planned" index={0} backgroundColor="#8E6E95" onAddCard={onAddCard}>
                  {cards[0].map((card, index) => (
                    <Card
                      key={card}
                      boardIndex={0}
                      cardIndex={index}
                      content={card}
                      onMoveCardLeft={onMoveCardLeft}
                      onMoveCardRight={onMoveCardRight}
                    />
                  ))}
                </BoardCol>
                <BoardCol title="In Progress" index={1} backgroundColor="#39A59C" onAddCard={onAddCard}>
                  {cards[1].map((card, index) => (
                    <Card
                      key={card}
                      boardIndex={1}
                      cardIndex={index}
                      content={card}
                      onMoveCardLeft={onMoveCardLeft}
                      onMoveCardRight={onMoveCardRight}
                    />
                  ))}
                </BoardCol>
                <BoardCol title="In Testing" index={2} backgroundColor="#344759" onAddCard={onAddCard}>
                  {cards[2].map((card, index) => (
                    <Card
                      key={card}
                      boardIndex={2}
                      cardIndex={index}
                      content={card}
                      onMoveCardLeft={onMoveCardLeft}
                      onMoveCardRight={onMoveCardRight}
                    />
                  ))}
                </BoardCol>
                <BoardCol title="Complete" index={3} backgroundColor="#E8741E" onAddCard={onAddCard}>
                  {cards[3].map((card, index) => (
                    <Card
                      key={card}
                      boardIndex={3}
                      cardIndex={index}
                      content={card}
                      onMoveCardLeft={onMoveCardLeft}
                      onMoveCardRight={onMoveCardRight}
                    />
                  ))}
                </BoardCol>
              </Fragment>
            )}
          </Consumer>
        </Row>
      </div>
    );
  }
}
