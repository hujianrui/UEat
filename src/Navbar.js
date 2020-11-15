import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { DatabaseContext } from "./Database";

class Navbar extends Component {
  static contextType = DatabaseContext;
  render() {
    const restaurantLinks = this.context.restaurants.map(r => (
      <li className='nav-item' key={r.name}>
        <NavLink exact to={`/${r.name}`} className='nav-link'>
          {r.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>UEat</Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mr-auto' >
            {restaurantLinks}
          </ul>

          <ul className='navbar-nav' >
            <li className='nav-item'>
              <NavLink exact to='/SignIn' className='nav-link'>Sign In</NavLink>
            </li>
          </ul>

        </div>

      </nav>
    );
  }
}
export default Navbar;
