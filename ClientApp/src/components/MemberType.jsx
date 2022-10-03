import React, {Component} from 'react'
import {Button, Collapse} from 'react-bootstrap'

class MemberType extends Component{

    constructor(props) {
        super(props);
        this.state = { details: props, open: false, phoneNumbers: [] };
      }

      static memberTypeIsNotNullOrEmpty(memberType)
      {
        if(memberType !== null && memberType !== undefined)
        {
            if(memberType.name !== null && memberType.name !== undefined)
            {
                return true;
            }
        }
        return false;
      }

    render(){
      return(
        <div key={this.state.details.props.name} className= "container">
        <p><b>Member Type: {this.state.details.props.name}</b>
        </p>
           <Button className="btn" variant="info" size='sm' onClick={()=>{this.setState({open: !this.state.open })}}>
               Description
           </Button>

           <Collapse in={this.state.open}>
               <div>                  
                    <p dangerouslySetInnerHTML={ { __html: this.state.details.props.description } } ></p>                  
               </div>
           </Collapse>
        </div>
        );
       }
}

export default MemberType