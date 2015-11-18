/**
 * Created by chanelsantiago on 11/17/15.
 */
Template.Itinerary.helpers({

  /**
   * @returns {*} All of the Itinerary documents.
   */
  flightList: function () {
    return Flight.find();
  },

  hotelList: function () {
    return Hotel.find();
  },

  carrentalList: function () {
    return CarRental.find();
  },

  diningList: function () {
    return Dining.find();
  },

  attractionsList: function () {
    return Attractions.find();
  }

});

Template.Itinerary.events({
  'click .deleteflight': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Meteor.call("deleteFlight", currentPostId);
      Router.go('Itinerary');

    }
  }
});