import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './orange';
import Yellow from './yellow';

class Red extends React.Component {
  render() {
    return(
      <div>
        <h2 className="red"></h2>
        {/* Links here */}
        <NavLink to='/red' exact >Red only</NavLink>
        <NavLink to='/red/orange' >Add orange</NavLink>
        <NavLink to='/red/yellow' >Add yellow</NavLink>
        {/* Routes here */}
      </div>
    );
  }
};

export default Red;
