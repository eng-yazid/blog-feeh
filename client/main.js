import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Requests} from '../imports/collections/Requests';


Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
