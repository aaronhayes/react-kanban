import React, {Component} from 'react';

export default class Card extends Component {

  onMoveCardLeft = () => {
    const { boardIndex, cardIndex } = this.props;
    this.props.onMoveCardLeft(boardIndex, cardIndex);
  };

  onMoveCardRight = () => {
    const { boardIndex, cardIndex } = this.props;
    this.props.onMoveCardRight(boardIndex, cardIndex);
  };

  render() {
    const { boardIndex } = this.props;
    const leftArrow = boardIndex > 0 ?
      <span onClick={this.onMoveCardLeft}>{'<'}</span> : null;
    const rightArrow = boardIndex < 3 ?
      <span onClick={this.onMoveCardRight}>{'>'}</span> : null;

    return (
      <div className="card">
        <div className="left">
          {leftArrow}
        </div>

        <div className="content">
          {this.props.content}
        </div>

        <div className="right">
          {rightArrow}
        </div>

      </div>
    );
  }
}
