import React, {Component} from 'react'
import {Button, Collapse} from 'react-bootstrap'
import CollapsableAddress from './CollapsableAddress';

class AddressSection extends Component{

    constructor(props) {
        super(props);
        this.state = { details: props, open: false, phoneNumbers: [] };
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

      static hasAnyAddressKnown(addresses)
      {        
        for(const address of addresses)
        {
          if(AddressSection.addressIsNotNullOrEmpty(address)){return true;}
        }
        return false;
      }

    render(){
      return(
        <div key={this.state.details.name} className= "container">
           <Collapse in={this.state.open}>
               <div>
                  {AddressSection.addressIsNotNullOrEmpty(this.state.details.props.billingAddress) &&
                    <li>
                      <b>Billing Address</b>: 
                      <ul> <CollapsableAddress props={this.state.details.props.billingAddress}></CollapsableAddress> </ul>
                    </li>
                  }
                  {AddressSection.addressIsNotNullOrEmpty(this.state.details.props.shippingAddress) &&
                    <li>
                      <b>Shipping Address</b>: 
                      <ul><CollapsableAddress props={this.state.details.props.shippingAddress}></CollapsableAddress></ul>
                    </li>
                  }
                  {AddressSection.addressIsNotNullOrEmpty(this.state.details.props.personalAddress) &&
                    <li>
                      <b>Personal Address</b>: 
                      <ul><CollapsableAddress props={this.state.details.props.personalAddress}></CollapsableAddress></ul>
                    </li>
                  }
               </div>
           </Collapse>
           <Button className="btn" variant="secondary" size='sm' onClick={()=>{this.setState({open: !this.state.open })}}>
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

export default AddressSection