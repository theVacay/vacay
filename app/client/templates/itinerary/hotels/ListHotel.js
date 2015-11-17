/**
 * Created by chanelsantiago on 11/15/15.
 */
Template.ListHotel.helpers({

  /**
   * @returns {*} All of the Hotel documents.
   */
  hotelList: function () {
    group=hotel;
    return Hotel.find();
  }
});