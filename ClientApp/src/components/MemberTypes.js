import React, { Component } from 'react';

export class MemberTypes extends Component {
  static displayName = MemberTypes.name;

  constructor(props) {
    super(props);
    this.state = { memberTypesResponse: [], loading: true };
  }

  componentDidMount() {
    this.populateMemberTypes();
  }

  static renderMemberTypesTable(memberTypesResponse) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {memberTypesResponse.results.map(memberType =>
            <tr key={memberType.name}>
              <td>{memberType.name}</td>
              <td dangerouslySetInnerHTML={ { __html: memberType.description } } ></td>                            
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : MemberTypes.renderMemberTypesTable(this.state.memberTypesResponse);

    return (
      <div>
        <h1 id="tabelLabel" >Member types</h1>
        <p>This component demonstrates fetching data from the novi-member-type.</p>
        <div>{contents}</div>
      </div>
    );
  }

  async populateMemberTypes() {
    const response = await fetch('memberTypes');
    const data = await response.json();

    const thisState = this.state;

    console.log("this is the state")
    console.log(thisState)
    
    this.setState({ memberTypesResponse: data, loading: false });
    
    console.log(this.state)
  }
}
