import React, { Component } from 'react';
import { MemberDetails } from "./MemberDetails";
import CollapsableDetails from "./CollapsableDetails"

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
            <th>Member Name</th>            
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {MemberListResponse.results.map(member =>
            <tr key={member.name}>
              <td style={{fontFamily:"Helvetica", textAlign:"left", verticalAlign:"middle"}} >{member.name}</td>              
              <CollapsableDetails props={member} ></CollapsableDetails>                    
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
    this.setState({ MemberListResponse: data, loading: false });    
  }
}
