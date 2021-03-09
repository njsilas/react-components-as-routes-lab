import React from 'react';
import { NavLink } from 'react-router-dom';
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'red',
  textDecoration: 'none',
  color: 'white',
}
const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkred'
      }}
      >Home</NavLink>
    <NavLink
    to="/movies"
      exact
      style={link}
      activeStyle={{
        background: 'darkred'
      }}
      >Movies</NavLink>
      <NavLink
      to="/directors"
      exact
      style={link}
      activeStyle={{
        background: 'darkred'
      }}
      >Directors</NavLink>
      <NavLink
      to="/actors"
      exact
      style={link}
      activeStyle={{
        background: 'darkred'
      }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
