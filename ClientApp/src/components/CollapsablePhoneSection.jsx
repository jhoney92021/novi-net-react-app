import React, {Component} from 'react'
import {Button, Collapse} from 'react-bootstrap'

class CollapsablePhoneSection extends Component{

    constructor(props) {
        super(props);
        this.state = { details: props, open: false, phoneNumbers: [] };
      }


      static numberIsNotNullOrEmpty(phoneNumber)
      {
        if(phoneNumber !== null && phoneNumber !== undefined)
        {
          return true;            
        }
        return false;
      }

      static hasAnyKnownPhoneNumbers(phoneNumbers)
      {        
        for(const phoneNumber of phoneNumbers)
        {
          if(CollapsablePhoneSection.numberIsNotNullOrEmpty(phoneNumber)){return true;}
        }
        return false;
      }

    render(){
      return(
        <div key={this.state.details.name} className= "container">
           <Collapse in={this.state.open}>
               <div>
                  {CollapsablePhoneSection.numberIsNotNullOrEmpty(this.state.details.props.phone) &&
                    <li>
                      <b>Phone</b>: {this.state.details.props.phone}                      
                    </li>
                  }
                  {CollapsablePhoneSection.numberIsNotNullOrEmpty(this.state.details.props.mobile) &&
                    <li>
                      <b>Mobile</b>: {this.state.details.props.mobile}  
                    </li>
                  }
                  {CollapsablePhoneSection.numberIsNotNullOrEmpty(this.state.details.props.personalPhone) &&
                    <li>
                      <b>Personal Phone</b>: {this.state.details.props.personalPhone}  
                    </li>
                  }
                  {CollapsablePhoneSection.numberIsNotNullOrEmpty(this.state.details.props.personalMobile) &&
                    <li>
                      <b>Personal Mobile</b>: {this.state.details.props.personalMobile}  
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

export default CollapsablePhoneSection