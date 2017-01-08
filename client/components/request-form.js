import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import Accounts from './accounts';
import {Requests} from '../../imports/collections/Requests';
import {createContainer} from 'meteor/react-meteor-data';

// import RequestsList from 'requests_list';
class RequestForm extends Component{

  onSendRequest(event){

      event.preventDefault();
      const partName = ReactDOM.findDOMNode(this.refs.partText).value;
      const carName = ReactDOM.findDOMNode(this.refs.carNameRef).value;

      let brandsOptions = document.getElementById("brands");
      let carBrand = brandsOptions.options[brandsOptions.selectedIndex].value;
      Meteor.call('parts.insert', partName,carBrand,carName);

      ReactDOM.findDOMNode(this.refs.partText).value;
      ReactDOM.findDOMNode(this.refs.carNameRef).value;
  }

  render(){

    // console.log(brandOptions);
    return (
      <div className = "wrapper">
        <div className ="login">
          <Accounts />
        </div>

        <div>
          <form>
            <label> enter part name </label>
            <input
              type ="text"
              ref = "partText"
            />
            <label> select brand </label>
            <select id = "brands">
              <option value="Toyota" defaultValue= "selected">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="Nissan">Nissan</option>
              <option value="Chevrolet">Chevrolet</option>
            </select>

            <label> enter car name </label>
            <input
              type= "text"
              ref ="carNameRef"
            />
            <button className= "btn btn-primary"
              onClick= {this.onSendRequest.bind(this)}
            > send request</button>
          </form>

        </div>
      </div>
    );
  }
}
export default createContainer(() =>{
  Meteor.subscribe('parts');
  return {parts :Requests.find({}).fetch()};
}, RequestForm);
