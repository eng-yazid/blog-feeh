import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import{Blaze} from 'meteor/blaze';
class Accounts extends Component {

  componentDidMount(){

    //whenver referenced a blaze template is  ,it returns a reference to the template that is rendered
    this.view = Blaze.render(Template.loginButtons,
    ReactDOM.findDOMNode(this.refs.loginContainer));
  }
  componentWillUnmount(){
    Blaze.remove(this.view);
  }
  render(){
    return (
      <div ref ="loginContainer">
      </div>
    );
  }
}

export default Accounts;
