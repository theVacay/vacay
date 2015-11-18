/**
 * Created by chanelsantiago on 11/15/15.
 */
flight = "Flight";  // avoid typos, this string occurs many times.

Flight = new Mongo.Collection(flight);

Flight.allow({
  update: function(userId, post) {
    return ownsDocument(userId, post); },
  remove: function(userId, post) {
    return ownsDocument(userId, post); },
});

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Stuff record.
   * @param flightdoc The Stuff document.
   */
  addFlight: function(flightdoc) {
    check(flightdoc, Flight.simpleSchema());
    Flight.insert(flightdoc);
  },
  /**
   *
   * Invoked by AutoForm to update a Stuff record.
   * @param flightdoc The Stuff document.
   * @param flightdocID It's ID.
   */
  editFlight: function(flightdoc, flightdocID) {
    check(flightdoc, Flight.simpleSchema());
    Flight.update({_id: flightdocID}, flightdoc);
  },

  deleteFlight: function(flightdocID) {
    Flight.remove({_id: flightdocID});
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(flight, function () {
    return Flight.find();
  });
}


/**
 * Create the schema for Stuff
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Flight.attachSchema(new SimpleSchema({
  flightnum: {
    label: "Flight Number",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: flight,
      placeholder: ""
    }
  },
  departure: {
    label: "Departure Airport",
    type: String,
    optional: false,
    autoform: {
      group: flight,
      placeholder: ""
    }
  },
  dtime: {
    label: "Departure Time",
    type: String,
    optional: false,
    autoform: {
      group: flight,
      placeholder: ""
    }
  },
  arrival: {
    label: "Arrival Airport",
    type: String,
    optional: false,
    autoform: {
      group: flight,
      placeholder: ""
    }
  },
  atime: {
    label: "Arrival Time",
    type: String,
    optional: false,
    autoform: {
      group: flight,
      placeholder: ""
    }
  },
  confirmation: {
    label: "Confirmation Number",
    type: String,
    optional: false,
    autoform: {
      group: flight,
      placeholder: ""
    }
  }
}));
