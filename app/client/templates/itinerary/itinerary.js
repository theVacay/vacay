/**
 * Created by chanelsantiago on 11/17/15.
 */
Template.Itinerary.helpers({

  /**
   * @returns {*} All of the Hotel documents.
   */
  hotelList: function () {
    group=hotel;
    return Hotel.find();
  },

  flightList: function () {
    group=flight;
    return Flight.find();
  },

  diningList: function () {
    group=dining;
    return Dining.find();
  }
});