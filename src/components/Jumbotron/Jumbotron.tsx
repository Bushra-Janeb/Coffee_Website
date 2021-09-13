import { Component } from 'react';

import Text from '../Information/Information';
import hero from '../../assests/mocha_late.png';
import Card from '../Card/Card';

import './jumbotron.css';

class Jumbotron extends Component {
  state = {
    cards: [
      {
        id: 0,
        type: 1,
        image_source: require("../../assests/coffeebag1.png").default,
        coffee_type: "Iced Coffee",
        description:
          "Coffee is a brewed drink prepared from roasted coffee beans,the seeds of berries from certain Coffea species.",
        isChecked: false,
        coffee_price: undefined
      },
      {
        id: 1,
        type: 1,
        image_source: require("../../assests/coffeebag2.png").default,
        coffee_type: "Caramel Frappe",
        description:
          "Coffee is a brewed drink prepared from roasted coffee beans,the seeds of berries from certain Coffea species.",
        isChecked: false,
        coffee_price: undefined
      },
      {
        id: 2,
        type: 1,
        image_source: require("../../assests/coffeebag3.png").default,
        coffee_type: "Mocha Late",
        description:
          "Coffee is a brewed drink prepared from roasted coffee beans,the seeds of berries from certain Coffea species.",
        isChecked: false,
        coffee_price: undefined
      }]
  }

  onDelete = (id: number): void => {
    this.setState(() => ({ cards: this.state.cards.filter(ele => ele.id !== id) }))
  }
  // no need to flex on coffeeCard
  // remove p tag from coffeeDetails
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <div className="bigCoffee">
              <img src={hero} alt="cannot find" />
              <div className="heroInformation">
                <div className="coffeeType">
                  Mocha Late
                </div>
                <div className="coffeeDetails">
                  <p>Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffee species.</p>
                </div>
                <div className="price">
                  <span> 1 bag </span>
                  <span> $69.99 </span>
                </div>
              </div>
            </div>
            <div className="holder">
              <Text />
              <div className="headerCards">
                {this.state.cards.map(card =>
                  <Card {...card} key={card.id} onDelete={this.onDelete} />
                )}
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}
export default Jumbotron;