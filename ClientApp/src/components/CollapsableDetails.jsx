import React, {Component} from 'react'
import {Button, Collapse} from 'react-bootstrap'
import CollapsableAddress from './CollapsableAddress';
import AddressSection  from "./AddressSection"

class CollapsableDetails extends Component{

    constructor(props) {
        super(props);
        this.state = { details: props, open: false };
      }


      static addressIsNotNullOrEmpty(address)
      {
        if(address !== null && address !== undefined)
        {
            if(address.address1 !== null && address.address1 !== undefined)
            {
                return true;
            }
        }
        return false;
      }


    render(){
      return(
        <div key={this.state.details.name} className= "container">
           <Button className="btn" onClick={()=>{this.setState({open: !this.state.open })}}>
               More Info
           </Button>

           <Collapse in={this.state.open}>
               <div>
                  <p><b>Member Name</b>: {this.state.details.props.name}</p>
                  {this.state.details.props.email &&
                    <p><b>Email</b>: {this.state.details.props.email}</p>
                  }
                  {this.state.details.props.memberProfile &&
                    <p><b>Member Profile</b>: {this.state.details.props.memberProfile}</p>
                  }
                  {AddressSection.hasAnyAddressKnown([this.state.details.props.billingAddress,this.state.details.props.shippingAddress,this.state.details.props.personalAddress]) &&
                        <AddressSection props={this.state.details.props}></AddressSection>
                  }
                  {this.state.details.props.quickBooksID &&
                    <p><b>QuickBooksID</b>: {this.state.details.props.quickBooksID}</p>
                  }
                  {this.state.details.props.customerType &&
                    <p><b>Customer Type</b>: {this.state.details.props.customerType}</p>
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
                    <p><b>FaceBook</b>: {this.state.details.props.facebookUrl}</p>
                  }
                  {this.state.details.props.linkedInUrl &&
                    <p><b>LinkedIn</b>: {this.state.details.props.linkedInUrl}</p>
                  }
                  {this.state.details.props.instagramHandle &&
                    <p><b>Instagram</b>: {this.state.details.props.instagramHandle}</p>
                  }
               </div>
           </Collapse>
        </div>
        );
       }
}

export default CollapsableDetails