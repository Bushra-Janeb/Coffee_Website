import { Component } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../assests/Navbar/logo.png'
import shopping_cart from '../../assests/Navbar/shopping_cart.jpeg';
import profile_image from '../../assests/Navbar/avatar.png';

import './navbar.css';

class Navbar extends Component {
  state = {
    tags: ['Home', 'About us', 'Our Lands', 'Our Suppliers', 'Products', 'Contact Us'],
    isNavOpen: false,
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <div className="menu">
            <FontAwesomeIcon icon={faBars} className={`bars ${this.state.isNavOpen ? 'hideIcon' : 'showIcon'}`} fontSize='medium' onClick={() => (this.setState({ isNavOpen: true }))} />
            <FontAwesomeIcon icon={faTimes} className={`cross ${this.state.isNavOpen ? 'showIcon' : 'hideIcon'}`} fontSize='medium' onClick={() => (this.setState({ isNavOpen: false }))} />
            <img src={logo} className="icon" alt="cannot find" />
          </div>
          <ul className={`links ${this.state.isNavOpen ? 'show' : 'hide'}`}> {this.state.tags.map(link => <li key={link}> <a href="#" className="anchor">{link}</a></li>)} </ul>
          <div className="left-menu">
            <img src={shopping_cart} className="shoppingCart" alt="cannot find" />
            <img src={profile_image} className="avatar" alt="cannot find" />
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;