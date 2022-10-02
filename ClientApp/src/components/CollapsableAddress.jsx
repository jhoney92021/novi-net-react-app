import React, {Component} from 'react'
import {Button, Collapse} from 'react-bootstrap'

class CollapsableAddress extends Component{

    constructor(props) {
        super(props);
        this.state = { address: props, open: false };
      }

    render(){
      return(
        <div key={this.state.address.props.address1} className= "container">          
            <p><b>Primary</b>: {this.state.address.props.address1}</p>
           <Button size="sm" className="btn" onClick={()=>{this.setState({open: !this.state.open })}}>
               ...
           </Button>

           <Collapse in={this.state.open}>
               <div>
                  {this.state.address.props.address2 &&
                    <p><b>Alternate</b>: {this.state.address.props.address2}</p>
                  }
                  {this.state.address.props.city &&
                    <p><b>City</b>: {this.state.address.props.city}</p>
                  }
                  {this.state.address.props.zipCode &&
                    <p><b>ZipCode</b>: {this.state.address.props.zipCode}</p>
                  }
                  {this.state.address.props.stateProvince &&
                    <p><b>State or Province</b>: {this.state.address.props.stateProvince}</p>
                  }
                  {this.state.address.props.country &&
                    <p><b>Country</b>: {this.state.address.props.country}</p>
                  }
               </div>
           </Collapse>
        </div>
        );
       }
}

export default CollapsableAddress