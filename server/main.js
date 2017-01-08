import { Meteor } from 'meteor/meteor';
import {Requests} from '../imports/collections/Requests';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('parts', function(){
    return Requests.find({ownerId: this.userId});
  });
});
