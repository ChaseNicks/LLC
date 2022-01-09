import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";


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
    return (
      <nav>
        <div className="navbar-start" style={{ marginRight: "3rem", marginLeft: "3rem"}}>
          <div className="navbar-brand">
            <Link to="/home" className="is-capitalized is-size-3 logo" style={{ display: "flex"}}>
              <img className="grow" src="tab-icon.png" alt="Digifie" style={{ height: "4rem", width: "4rem"}}/>
            </Link>
            <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
          </div>

          <div
            className={`navbar-menu ${this.state.activeMenu ? "is-active" : "navbar-end"}`}
          >
          <Link
            className="navbar-item is-capitalized is-size-4 nav-item-styles hov grow"
            to="/home"
          >
            Home
          </Link>

          <Link
            className="navbar-item is-capitalized is-size-4 nav-item-styles hov grow"
            to="/services"
          >
            Services
          </Link>

          <Link
            className="navbar-item is-capitalized is-size-4 nav-item-styles hov grow"
            to="/about"
          >
            About
          </Link>

          <Link
            className="navbar-item is-capitalized is-size-4 nav-item-styles cont-hov grow"
            to="/contact"
            style={{ border: "2px #972EFF solid", borderRadius: "5rem"}}
          >
            Contact
          </Link>
          </div>

        </div>
      </nav>
    );
  }
}
