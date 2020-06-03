import React from 'react';
import {NavLink} from 'react-router-dom';
//import Cosmos from './Links/Cosmos';

const Nav = props => {
  
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to={'/cosmos'}>Cosmos</NavLink></li>
        <li><NavLink to={'/nature'}>Nature</NavLink></li>
        <li><NavLink to={'/machines'}>Machines</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;
