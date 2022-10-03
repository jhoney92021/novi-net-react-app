import React, {Component} from 'react'
import {Button, Collapse} from 'react-bootstrap'
import CollapsableAddressSection  from "./CollapsableAddressSection"
import MemberType from './CollapsableMemberType';
import CollapsablePhoneSection from './CollapsablePhoneSection';
import CollapsableEmailSection from './CollapsableEmailSection';
import {removeTimePart} from "./Helpers/DateTimeHelpers";

class CollapsableDetails extends Component{

    constructor(props) {
        super(props);
        this.state = { details: props, open: false };
      }

    render(){
      return(
        <div key={this.state.details.name} className= "container">
           <Collapse in={this.state.open}>
               <div>                  
                    {(this.state.details.props.firstName || this.state.details.props.lastName) &&
                        <p><b>Contact Name</b>: {this.state.details.props.firstName} {this.state.details.props.lastName} {this.state.details.props.suffix}</p>
                    }
                    {this.state.details.props.parentMemberName &&
                        <p><b>ParentMemberName</b>: {this.state.details.props.parentMemberName}</p>
                    }
                    {this.state.details.props.website &&
                        <p><b>WebSite</b>: <a href={this.state.details.props.website}>{this.state.details.props.website}</a></p>
                    }
                    {this.state.details.props.memberStatus &&
                        <p><b>Member Status</b>: {this.state.details.props.memberStatus}</p>
                    }
                    { CollapsableEmailSection.hasAnyKnownEmails([this.state.details.props.email,this.state.details.props.personalEmail]) &&
                        <p>
                        <b>Known Email Addresses</b>:
                        <CollapsableEmailSection props={this.state.details.props}></CollapsableEmailSection>
                        </p>                    
                    }
                    {this.state.details.props.memberProfile &&
                        <p><b>Member Profile</b>: {this.state.details.props.memberProfile}</p>
                    }
                    {CollapsablePhoneSection.hasAnyKnownPhoneNumbers([this.state.details.props.phone,this.state.details.props.mobile,this.state.details.props.personalPhone,this.state.details.props.personalMobile,this.state.details.props.fax]) &&
                        <p>
                        <b>Known Phone Numbers</b>:
                        <CollapsablePhoneSection props={this.state.details.props}></CollapsablePhoneSection>
                        </p>
                    }
                    {CollapsableAddressSection.hasAnyKnownAddress([this.state.details.props.billingAddress,this.state.details.props.shippingAddress,this.state.details.props.personalAddress]) &&
                        <p>
                        <b>Known Addresses</b>:
                        <CollapsableAddressSection props={this.state.details.props}></CollapsableAddressSection>
                        </p>
                    }
                    {this.state.details.props.county &&
                        <p><b>County</b>: {this.state.details.props.county}</p>
                    }
                    {this.state.details.props.quickBooksID &&
                        <p><b>QuickBooksID</b>: {this.state.details.props.quickBooksID}</p>
                    }
                    {this.state.details.props.customerType &&
                        <p><b>Customer Type</b>: {this.state.details.props.customerType}</p>
                    }
                    {this.state.details.props.memberSince &&
                        <p><b>Member Since</b>: {removeTimePart(this.state.details.props.memberSince)}</p>
                    }
                    {this.state.details.props.membershipExpires &&
                        <p><b>Membership Expiration Date</b>: {removeTimePart(this.state.details.props.membershipExpires)}</p>
                    }
                    {this.state.details.props.originalJoinDate &&
                        <p><b>Original Join Date</b>: {removeTimePart(this.state.details.props.originalJoinDate)}</p>
                    }
                    {MemberType.memberTypeIsNotNullOrEmpty(this.state.details.props.memberType) &&
                        <p>
                        <b>Member Type</b>: {this.state.details.props.memberType.name}
                        {this.state.details.props.memberType.description !== null 
                            ? <MemberType props={this.state.details.props.memberType}></MemberType>
                            : <p>No Description</p>
                        }
                        </p>
                    }
                    {this.state.details.props.active 
                        ? <p><b>Active</b>: <span style={{color:"green"}}>yes</span></p>
                        : <p><b>Active</b>: <span style={{color:"red"}}>no</span></p>
                    }
                    {this.state.details.props.autoPay 
                        ? <p><b>Auto Pay</b>: <span style={{color:"green"}}>yes</span></p>
                        : <p><b>Auto Pay</b>: <span style={{color:"red"}}>no</span></p>
                    }
                    {this.state.details.props.autoRenew
                        ? <p><b>Auto Renew</b>: <span style={{color:"green"}}>yes</span></p>
                        : <p><b>Auto Renew</b>: <span style={{color:"red"}}>no</span></p>
                    }
                    {this.state.details.props.facebookUrl &&
                        <p><b>FaceBook</b>: <a href={this.state.details.props.facebookUrl}>{this.state.details.props.facebookUrl}</a></p>
                    }
                    {this.state.details.props.linkedInUrl &&
                        <p><b>LinkedIn</b>: <a href={this.state.details.props.linkedInUrl}>{this.state.details.props.linkedInUrl}</a></p>
                    }
                    {this.state.details.props.instagramHandle &&
                        <p><b>Instagram</b>: {this.state.details.props.instagramHandle}</p>
                    }
               </div>
           </Collapse>
           <Button className="btn" size='sm' onClick={()=>{this.setState({open: !this.state.open })}}>
               {this.state.open &&
                <span>
                    ^
                </span> 
               }
               {!this.state.open &&
                <span>
                    ...
                </span> 
               }
           </Button>
        </div>
        );
       }
}

export default CollapsableDetails