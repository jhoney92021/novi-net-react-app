import React, {Component} from 'react'
import {Button, Collapse} from 'react-bootstrap'

class CollapsableMemberType extends Component{

    constructor(props) {
        super(props);
        this.state = { details: props, open: false, phoneNumbers: [] };
      }

      static memberTypeIsNotNullOrEmpty(memberType)
      {
        if(memberType !== null && memberType !== undefined)
        {
            if(memberType.name !== null && memberType.name !== undefined && memberType.name !== "")
            {
                return true;
            }
        }
        return false;
      }

    render(){
      return(
        <div key={this.state.details.props.name} className= "container">        
           <Collapse in={this.state.open}>
               <div>                  
                    <p dangerouslySetInnerHTML={ { __html: this.state.details.props.description } } ></p>                  
               </div>
           </Collapse>

           <Button className="btn" variant="info" size='sm' onClick={()=>{this.setState({open: !this.state.open })}}>
           {this.state.open &&
                <span>
                    ^
                </span> 
               }
               {!this.state.open &&
                <span>
                    Description
                </span> 
               }
           </Button>
        </div>
        );
       }
}

export default CollapsableMemberType