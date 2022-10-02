import React, { Component, useState } from 'react';
import { MemberDetails } from "./MemberDetails";

export class MemberList extends Component {
  static displayName = "MemberList";
  

  constructor(props) {
    super(props);
    this.state = { MemberListResponse: [], loading: true };
  }

  componentDidMount() {
    this.populateMembers();
  }

  static renderMembersTable(MemberListResponse) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {MemberListResponse.results.map(member =>
            <tr key={member.name}>
              <td onClick={() => { 
                console.log(`~~~ CLICKED ${member} ~~~`)
                let details = new MemberDetails(member);
                // details.renderMemeberDetails(member);
                }}>{member.name}</td>
              <td>{member.memberStatus}</td>                            
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : MemberList.renderMembersTable(this.state.MemberListResponse);

    return (
      <div>
        <h1 id="tabelLabel" >Members</h1>
        <p>This component demonstrates fetching a collection of members.</p>
        <div>{contents}</div>
      </div>
    );
  }

  async populateMembers() {
    const response = await fetch('memberList');
    const data = await response.json();

    const thisState = this.state;

    console.log("this is the state")
    console.log(thisState)
    
    this.setState({ MemberListResponse: data, loading: false });
    
    console.log(this.state)
  }
}
