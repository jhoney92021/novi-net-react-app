import React, {Component} from 'react'
import {Button, Collapse} from 'react-bootstrap'

class CollapsableEmailSection extends Component{

    constructor(props) {
        super(props);
        this.state = { details: props, open: false };
      }


      static emailIsNotNullOrEmpty(email)
      {
        if(email !== null && email !== undefined && email !== "")
        {
          return true;            
        }
        return false;
      }

      static hasAnyKnownEmails(emails)
      {        
        for(const email of emails)
        {
          if(CollapsableEmailSection.emailIsNotNullOrEmpty(email)){return true;}
        }
        return false;
      }

    render(){
      return(
        <div key={this.state.details.name} className= "container">
           <Collapse in={this.state.open}>
               <div>
                  {CollapsableEmailSection.emailIsNotNullOrEmpty(this.state.details.props.email) &&
                    <li>
                      <b>Email</b>: {this.state.details.props.email}                      
                    </li>
                  }
                  {CollapsableEmailSection.emailIsNotNullOrEmpty(this.state.details.props.personalEmail) &&
                    <li>
                      <b>Personal Email</b>: {this.state.details.props.personalEmail}  
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

export default CollapsableEmailSection