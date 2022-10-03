import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello, novi!</h1>
        <p>Welcome to your new Assocaiation Management :</p>
        <ul>
          <li>
            <strong>What sort of member are you?</strong>
            <NavLink tag={Link} variant="info" to="/fetch-member-types">Association Member Types</NavLink>
          </li>
          <li>
            <strong>Looking to join an association see the directory</strong>
            <NavLink tag={Link} variant="info" to="/fetch-members">Associations and Members</NavLink>
          </li>          
        </ul>
      </div>
    );
  }
}
