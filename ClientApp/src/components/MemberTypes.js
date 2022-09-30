import React, { Component } from 'react';

export class MemberTypes extends Component {
  static displayName = MemberTypes.name;

  constructor(props) {
    super(props);
    this.state = { memberTypesResponse: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderMembersTable(memberTypesResponse) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {memberTypesResponse.results.map(forecast =>
            <tr key={forecast.name}>
              <td>{forecast.name}</td>
              <td dangerouslySetInnerHTML={ { __html: forecast.description } } ></td>                            
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : MemberTypes.renderMembersTable(this.state.memberTypesResponse);

    return (
      <div>
        <h1 id="tabelLabel" >Member types</h1>
        <p>This component demonstrates fetching data from the novi-member-type.</p>
        <div>{contents}</div>
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('memberTypes');
    const data = await response.json();

    const thisState = this.state;

    console.log("this is the state")
    console.log(thisState)
    
    this.setState({ memberTypesResponse: data, loading: false });
    
    console.log(this.state)
  }
}
