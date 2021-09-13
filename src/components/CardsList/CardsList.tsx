import { Component } from 'react';
import { Link } from 'react-router-dom';

import './cards_lists.css';
import Card from '../Card/Card';

class CardsList extends Component {
  state = {
    cards: [
      {
        id: 0,
        type: 0,
        image_source: require("../../assests/coffeebag3.png")
          .default,
        coffee_type: "Mocha Late 0",
        description:
          "Coffee is a brewed drink prepared from roasted coffee beans,the seeds of berries from certain Coffee species.",
        isChecked: false,
        coffee_price: undefined
      },
      {
        id: 1,
        type: 0,
        image_source: require("../../assests/coffeebag3.png")
          .default,
        coffee_type: "Mocha Late 2",
        description:
          "Coffee is a brewed drink prepared from roasted coffee beans,the seeds of berries from certain Coffee species.",
        isChecked: false,
        coffee_price: undefined
      },
      {
        id: 2,
        type: 0,
        image_source: require("../../assests/coffeebag3.png")
          .default,
        coffee_type: "Mocha Late 3",
        description:
          "Coffee is a brewed drink prepared from roasted coffee beans,the seeds of berries from certain Coffee species.",
        isChecked: false,
        coffee_price: undefined
      },
      {
        id: 3,
        type: 0,
        image_source: require("../../assests/coffeebag3.png")
          .default,
        coffee_type: "Mocha Late 4",
        description:
          "Coffee is a brewed drink prepared from roasted coffee beans,the seeds of berries from certain Coffee species.",
        isChecked: false,
        coffee_price: undefined
      },
      {
        id: 4,
        type: 0,
        image_source: require("../../assests/coffeebag4.png")
          .default,
        coffee_type: "Double Espresso 0",
        description:
          "Coffee is a brewed drink prepared from roasted coffee beans,the seeds of berries from certain Coffee species.",
        isChecked: false,
        coffee_price: undefined
      },
      {
        id: 5,
        type: 0,
        image_source: require("../../assests/coffeebag4.png").default,
        coffee_type: "Double Espresso 2",
        description:
          "Coffee is a brewed drink prepared from roasted coffee beans,the seeds of berries from certain Coffee species.",
        isChecked: false,
        coffee_price: undefined
      },
      {
        id: 6,
        type: 0,
        image_source: require("../../assests/coffeebag4.png").default,
        coffee_type: "Double Espresso 3",
        description:
          "Coffee is a brewed drink prepared from roasted coffee beans,the seeds of berries from certain Coffee species.",
        isChecked: false,
        coffee_price: undefined
      },
      {
        id: 7,
        type: 0,
        image_source: require("../../assests/coffeebag4.png")
          .default,
        coffee_type: "Double Espresso 4",
        description:
          "Coffee is a brewed drink prepared from roasted coffee beans,the seeds of berries from certain Coffee species.",
        isChecked: false,
        coffee_price: undefined
      },
    ]
  }

  onDelete = (id: number): void => {
    this.setState({ cards: this.state.cards.filter(ele => ele.id !== id) })
  }

  render() {
    return (
      <>
        <div className="container3">
          <div className="container">
            <div className="Container4">
              {this.state.cards.map(card =>
                <Card {...card} key={card.id} onDelete={this.onDelete} />
              )}
            </div>
            <Link to='/form'>
              <button className="submit" type="submit"> Add New Coffee </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default CardsList;