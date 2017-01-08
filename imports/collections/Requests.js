import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Requests = new Mongo.Collection('parts');

Meteor.methods({
  'parts.insert'(partName,carBrand,carName){
     check(partName,String);
     check(carBrand,String);
     check(carName,String);

     Requests.insert({
      partName,
      createdAt: new Date(),
      carBrand,
      carName,
      ownerId:this.userId

    });
  }
});
RequestsSchema= new SimpleSchema({
  partName: {
    label: "Name",
    type: String,
  },
  createdAt: {
    label:"created At",
    type: Date,
  },
  carBrand:{
    label:"Brand",
    type:String,
    optional: true,
    allowedValues: ["Toyota","Nissan","Honda","Ford"],
    autoform:{
      options: [
        {label: "Toyota", value: "Toyota"},
        {label: "Nissan", value: "Nissan"},
        {label: "Honda", value: "Honda"},
        {label: "Ford", value: "Ford"},
      ]
    }
  },
  carName: {
    label: "car name",
    type: String,

  },
});

Requests.attachSchema(RequestsSchema);
