import React , {Component}from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Requests} from '../../imports/collections/Requests';
// import RequestForm from './request-form';

class RequestsList extends Component {
  renderRequests(){
    // console.log("this is render",this.props.parts);

    return this.props.parts.map(part => {
      return(
          <li className= "list-group-item" key={part._id}>
            {part.partName}
          </li>
      );
    });

  }
  render(){
    console.log(this.props.parts);
    return(
      <div className ="list-group">
        {this.renderRequests()}
       </div>
    );
  }
}


export default createContainer(() =>{
  Meteor.subscribe('parts');
  return {parts :Requests.find({}).fetch()};
}, RequestsList);
