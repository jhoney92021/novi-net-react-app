import React, { Component } from 'react';
import {Button, Collapse} from 'react-bootstrap'
import CollapsableDetails from "./CollapsableDetails"

export class MemberDetails extends Component {
  static displayName = MemberDetails.name; 

  constructor(props) {
    super(props);
    this.state = { MemberDetails: props, loading: true, openDetails: false };
  }

  componentDidMount() {
    console.log("details mounted");    
    this.state.loading = false;
    this.state.openDetails = false;
  }

  static renderMemberDetails(details) {

    

    return (                
        <div style={{justifyContent: "center"}} >
          
          <span style={{color: "red"}} >{details.name}</span>
          <span> <CollapsableDetails props={details} ></CollapsableDetails></span>              
        </div>      
    );
  }

  render() {
    let contents = this.state.MemberDetails === null || undefined
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
