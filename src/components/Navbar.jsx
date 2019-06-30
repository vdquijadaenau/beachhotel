import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LINKS } from "../config/links";
import logo from "../images/logo.svg";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  renderLinks = () => {
    return LINKS.map((link, i) => (
      <li key={i}>
        <Link to={link.linkTo}>{link.name}</Link>
      </li>
    ));
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="beach resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
