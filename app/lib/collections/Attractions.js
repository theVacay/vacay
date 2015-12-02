/**
 * Created by chanelsantiago on 11/17/15.
 */
attractions = "Attractions";  // avoid typos, this string occurs many times.

Attractions = new Mongo.Collection(attractions);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Attractions record.
   * @param attractionsdoc The Attractions document.
   */
  addAttractions: function(attractionsdoc) {
    check(attractionsdoc, Attractions.simpleSchema());
    Attractions.insert(attractionsdoc);
  },
  /**
   *
   * Invoked by AutoForm to update a Attractions record.
   * @param attractionsdoc The Attractions document.
   * @param attractionsdocID It's ID.
   */
  editAttractions: function(attractionsdoc, attractionsdocID) {
    check(attractionsdoc, Attractions.simpleSchema());
    Attractions.update({_id: attractionsdocID}, attractionsdoc);
  },

  deleteAttractions: function(attractionsdocID) {
    Attractions.remove({_id: attractionsdocID});
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(attractions, function () {
    return Attractions.find();
  });
}


/**
 * Create the schema for Stuff
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Attractions.attachSchema(new SimpleSchema({
  startdate: {
    label: "Start Date",
    type: Date,
    optional: false,
    autoform: {
      group: attractions,
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  enddate: {
    label: "End Date",
    type: Date,
    optional: false,
    autoform: {
      group: attractions,
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  event: {
    label: "Attraction",
    type: String,
    optional: false,
    autoform: {
      group: attractions,
      placeholder: ""
    }
  },
  confirmation: {
    label: "Confirmation Number",
    type: String,
    optional: true,
    autoform: {
      group: attractions,
      placeholder: ""
    }
  }
}));
