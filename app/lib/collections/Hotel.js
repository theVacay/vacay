/**
 * Created by chanelsantiago on 11/17/15.
 */
hotel = "Hotel";  // avoid typos, this string occurs many times.

Hotel = new Mongo.Collection(hotel);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Hotel record.
   * @param hoteldoc The Hotel document.
   */
  addHotel: function(hoteldoc) {
    check(hoteldoc, Hotel.simpleSchema());
    Hotel.insert(hoteldoc);
  },
  /**
   *
   * Invoked by AutoForm to update a Stuff record.
   * @param hoteldoc The Stuff document.
   * @param hoteldocID It's ID.
   */
  editHotel: function(hoteldoc, hoteldocID) {
    check(hoteldoc, Hotel.simpleSchema());
    Hotel.update({_id: hoteldocID}, hoteldoc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(hotel, function () {
    return Hotel.find();
  });
}


/**
 * Create the schema for Hotel
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Hotel.attachSchema(new SimpleSchema({
  arrivalDate: {
    label: "Arrival Date",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: hotel,
      placeholder: ""
    }
  },
  departureDate: {
    label: "Departure Date",
    type: String,
    optional: false,
    autoform: {
      group: hotel,
      placeholder: ""
    }
  },
  hotelName: {
    label: "Hotel Name",
    type: String,
    optional: false,
    autoform: {
      group: hotel,
      placeholder: ""
    }
  },
  hotelcon: {
    label: "Confirmation Number",
    type: String,
    optional: false,
    autoform: {
      group: hotel,
      placeholder: ""
    }
  }
}));
