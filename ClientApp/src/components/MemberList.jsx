import React, { Component } from 'react';
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
      <ul>
          {MemberListResponse.results.map(member =>              
            <MemberDetails key={member.name} props={member}></MemberDetails>
          )}     
      </ul>
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
