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