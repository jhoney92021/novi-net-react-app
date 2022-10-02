import React, { Component } from 'react';

export class MemberDetails extends Component {
  static displayName = MemberDetails.name;

  open = "<";

  constructor(props) {
    super(props);
    this.state = { MemberDetails: props, loading: true };
  }

  componentDidMount() {
    console.log("details mounted");    
    this.state.loading = false;
  }

  static renderMemberDetails(details) {
    return (                
        <div style={{justifyContent: "center"}} >
          <span>{this.open}</span>
          <span style={{color: "red"}} >{details.name}</span>
          <span>  {details.originalJoinDate}</span>              
        </div>      
    );
  }

  render() {
    let contents = this.state.MemberDetails === null
      ? <p><em>Loading...</em></p>
      : MemberDetails.renderMemberDetails(this.state.MemberDetails.props);

    return contents;
  }

  // async populateDetails() {
  //   const response = await fetch('memberList');
  //   const data = await response.json();

  //   const thisState = this.state;

  //   console.log(`populateing details for ${this.state.MemberDetails.name}`)
  //   console.log(thisState)
    
  //   this.setState({ MemberListResponse: data, loading: false });
    
  //   console.log(this.state)
  // }
}
