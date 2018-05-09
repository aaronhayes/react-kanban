import React, {Component} from 'react';
import { Col } from 'reactstrap';

export default class BoardCol extends Component {
  onAddCard = () => {
    const text = window.prompt("Please enter card text");
    this.props.onAddCard(this.props.index, text);
  };

  render() {
    return (
      <Col md={3} className="board-col">
        <div
          className="col-title"
          style={{backgroundColor: this.props.backgroundColor}}
        >
          <h5>{this.props.title}</h5>
        </div>
        {this.props.children}
        <span onClick={this.onAddCard}>+ Add Card</span>
      </Col>
    );
  }
}
