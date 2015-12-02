/**
 * Created by chanelsantiago on 11/17/15.
 */
Template.Itinerary.helpers({

  /**
   * @returns {*} All of the Itinerary documents.
   */
  flightList: function () {
    return Flight.find({}, {sort: {startdate: 1}});
  },

  hotelList: function () {
    return Hotel.find({}, {sort: {startdate: 1}});
  },

  carrentalList: function () {
    return CarRental.find({}, {sort: {startdate: 1}});
  },

  diningList: function () {
    return Dining.find({}, {sort: {startdate: 1}});
  },

  attractionsList: function () {
    return Attractions.find({}, {sort: {startdate: 1}});
  },

  formatDate: function(date) {
    return moment(date).format('L');
  },

  formatTime: function(date) {
    return moment(date).format('h:mm A');
  },
});

Template.Itinerary.events({
  'click .deleteflight': function(e) {
    e.preventDefault();

    if (confirm("Delete this flight?")) {
      var currentPostId = this._id;
      Meteor.call("deleteFlight", currentPostId);
      Router.go('Itinerary');

    }
  },

  'click .deletehotel': function(e) {
    e.preventDefault();

    if (confirm("Delete this hotel?")) {
      var currentPostId = this._id;
      Meteor.call("deleteHotel", currentPostId);
      Router.go('Itinerary');

    }
  },

  'click .deleteattractions': function(e) {
    e.preventDefault();

    if (confirm("Delete this attraction?")) {
      var currentPostId = this._id;
      Meteor.call("deleteAttractions", currentPostId);
      Router.go('Itinerary');

    }
  },

  'click .deletecarrental': function(e) {
    e.preventDefault();

    if (confirm("Delete this car rental?")) {
      var currentPostId = this._id;
      Meteor.call("deleteCarRental", currentPostId);
      Router.go('Itinerary');

    }
  },

  'click .deletedining': function(e) {
    e.preventDefault();

    if (confirm("Delete this dining reservation?")) {
      var currentPostId = this._id;
      Meteor.call("deleteDining", currentPostId);
      Router.go('Itinerary');

    }
  },

  'click .deletehotels': function(e) {
    e.preventDefault();

    if (confirm("Delete this hotel?")) {
      var currentPostId = this._id;
      Meteor.call("deleteHotels", currentPostId);
      Router.go('Itinerary');

    }
  }
});