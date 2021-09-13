import { Link } from 'react-router-dom';
import { Component } from 'react';

import './card.css';

interface CardProp {
  onDelete: (id: number) => void
  coffee_price: number | undefined
  coffee_type: string,
  description: string,
  id: number,
  image_source: string,
  type: number,
}

export class Card extends Component<CardProp> {

  render() {
    return (
      <>
        <div className="coffeeCard">
          <Link to={{ pathname: '/form', state: { cof: { id: this.props.id, description: this.props.description, type: this.props.type, image_source: this.props.image_source, coffee_type: this.props.coffee_type, coffee_price: this.props.coffee_price } } }}>
            <img src={this.props.image_source} alt="cannot find" />
          </Link>
          <div className="information">
            <div className="coffeeType">
              {this.props.coffee_type}
            </div>
            <div className="coffeeDetails">
              {this.props.description}
            </div>
            <button className="btn button" onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;