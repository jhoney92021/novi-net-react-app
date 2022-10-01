import React, { Component } from 'react';

export class Members extends Component {
  static displayName = Members.name;

  constructor(props) {
    super(props);
    this.state = { MembersResponse: [], loading: true };
  }

  componentDidMount() {
    this.populateMembers();
  }

  static renderMembersTable(MembersResponse) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {MembersResponse.results.map(forecast =>
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
      : Members.renderMembersTable(this.state.MembersResponse);

    return (
      <div>
        <h1 id="tabelLabel" >Members</h1>
        <p>This component demonstrates fetching a collection of members.</p>
        <div>{contents}</div>
      </div>
    );
  }

  async populateMembers() {
    const response = await fetch('members');
    const data = await response.json();

    const thisState = this.state;

    console.log("this is the state")
    console.log(thisState)
    
    this.setState({ MembersResponse: data, loading: false });
    
    console.log(this.state)
  }
}
