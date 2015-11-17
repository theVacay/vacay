/**
 * Created by chanelsantiago on 11/17/15.
 */
carrental = "CarRental";  // avoid typos, this string occurs many times.

CarRental = new Mongo.Collection(carrental);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new CarRental record.
   * @param carrentaldoc The CarRental document.
   */
  addCarRental: function(carrentaldoc) {
    check(carrentaldoc, CarRental.simpleSchema());
    CarRental.insert(carrentaldoc);
  },
  /**
   *
   * Invoked by AutoForm to update a CarRental record.
   * @param carrentaldoc The CarRental document.
   * @param carrentaldocID It's ID.
   */
  editCarRental: function(carrentaldoc, carrentaldocID) {
    check(carrentaldoc, CarRental.simpleSchema());
    CarRental.update({_id: carrentaldocID}, carrentaldoc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(carrental, function () {
    return CarRental.find();
  });
}


/**
 * Create the schema for Stuff
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
CarRental.attachSchema(new SimpleSchema({
  pickup: {
    label: "Pick-Up Date",
    type: String,
    optional: false,
    autoform: {
      group: carrental,
      placeholder: ""
    }
  },
  dropoff: {
    label: "Drop-off Date",
    type: String,
    optional: false,
    autoform: {
      group: carrental,
      placeholder: ""
    }
  },
  company: {
    label: "Rental Company",
    type: String,
    optional: false,
    autoform: {
      group: carrental,
      placeholder: ""
    }
  },
  confirmation: {
    label: "Confirmation Number",
    type: String,
    optional: false,
    autoform: {
      group: carrental,
      placeholder: ""
    }
  }
}));
