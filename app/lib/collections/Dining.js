/**
 * Created by chanelsantiago on 11/17/15.
 */
dining = "Dining";  // avoid typos, this string occurs many times.

Dining = new Mongo.Collection(dining);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Stuff record.
   * @param diningdoc The Stuff document.
   */
  addDining: function(diningdoc) {
    check(diningdoc, Dining.simpleSchema());
    Dining.insert(diningdoc);
  },
  /**
   *
   * Invoked by AutoForm to update a Stuff record.
   * @param diningdoc The Stuff document.
   * @param diningdocID It's ID.
   */
  editDining: function(diningdoc, diningdocID) {
    check(diningdoc, Dining.simpleSchema());
    Dining.update({_id: diningdocID}, diningdoc);
  },

  deleteDining: function(diningdocID) {
    Dining.remove({_id: diningdocID});
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(dining, function () {
    return Dining.find();
  });
}


/**
 * Create the schema for Dining
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Dining.attachSchema(new SimpleSchema({
  startdate: {
    label: "Date",
    type: Date,
    optional: false,
    autoform: {
      group: dining,
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  restaurant: {
    label: "Restaurant",
    type: String,
    optional: false,
    autoform: {
      group: dining,
      placeholder: ""
    }
  },
  confirmation: {
    label: "Confirmation Number",
    type: String,
    optional: true,
    autoform: {
      group: dining,
      placeholder: ""
    }
  }
}));
