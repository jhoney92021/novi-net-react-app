import React, { Component } from 'react';

export class MemberDetails extends Component {
  static displayName = MemberDetails.name;

  constructor(props) {
    super(props);
    this.state = { MemberDetails: [], loading: true, renderMembersDetails: Function };
  }

  componentDidMount() {
    console.log("details mounted")
    this.renderMembersDetails(this.state.MemberDetails);
  }

  static renderMembersDetails(MemberDetails) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>          
            <tr key={MemberDetails.name}>
              <td>{MemberDetails.name}</td>
              <td>{MemberDetails.title}</td>              
            </tr>          
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : MemberDetails.renderMembersDetails(this.state.MembersResponse);

    return (
      <div>
        <h1 id="tabelLabel" >Member Details</h1>
        <p>This component demonstrates displaying details of a member.</p>
        <div>{contents}</div>
      </div>
    );
  }
}
