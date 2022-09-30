import React, { Component } from 'react';

export class MemberTypes extends Component {
  static displayName = MemberTypes.name;

  constructor(props) {
    super(props);
    this.state = { memberTypes: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderMembersTable(memberTypes) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {memberTypes.results.map(forecast =>
            <tr key={forecast.name}>
              <td>{forecast.name}</td>
              <td>{forecast.description}</td>              
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : MemberTypes.renderMembersTable(this.state.memberTypes);

    return (
      <div>
        <h1 id="tabelLabel" >Member types</h1>
        <p>This component demonstrates fetching data from the novi-member-type.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('member');
    const data = await response.json();

    const thisState = this.state;

    console.log("this is the state")
    console.log(thisState)
    
    this.setState({ memberTypes: data, loading: false });
    
    console.log(this.state)
  }
}
