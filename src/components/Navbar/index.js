import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/navbar.css";

const NavbarLogo = (props) => (
  <Link
    className="navbar-item is-capitalized is-size-3"
    onClick={props.isOpen ? props.toggleMenu : null}
  >
    <img src="tab-icon.png" alt="Digifie" style={{ width: '2rem', height: '10rem'}}/>
  </Link>
);


const NavbarItem = (props) => (
  <Link
    className="navbar-item is-capitalized is-size-5 nav-item-styles"
    to={`${props.page === "home" ? "/" : "/" + props.page}`}
    style={{ textDecoration: "none" }}
    onClick={props.toggleMenu}
  >
    {props.page}
  </Link>
);

const NavbarBurger = (props) => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? "is-active" : ""}`}
    aria-label={"menu"}
    aria-expanded={props.active ? true : false}
  >
    <span />
    <span />
    <span />
  </button>
);

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
  render() {
    let { pages = [], color } = this.props;

    // Create navbar links for each page
    let navbarItems = pages.map((page) => (
      <NavbarItem page={page} key={page} toggleMenu={this.toggleMenu} />
    ));

    return (
      <nav className={`navbar is-${color}`}>
      {/* Render clickable Logo */}
      <div className="navbar-brand">
        <NavbarLogo
          page="CoinBull"
          toggleMenu={this.toggleMenu}
          isOpen={this.state.activeMenu}
          style={{ height: "5rem"}}
        />

        {/* Render collapsable burger menu for smaller screens*/}
        <NavbarBurger
          active={this.state.activeMenu}
          toggleMenu={this.toggleMenu}
        />
      </div>
      <div
        className={`navbar-menu ${this.state.activeMenu ? "is-active" : ""}`}
      >
        {/* Populate navbar with page items */}
        <div className="navbar-start">{navbarItems}</div>

        {/* Display signout button if user is logged in */}
      </div>
    </nav>
  );
}
}

Navbar.propTypes = {
  pages: PropTypes.array.isRequired,
  color: PropTypes.string,
};