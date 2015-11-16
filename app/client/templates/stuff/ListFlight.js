/**
 * Created by chanelsantiago on 11/15/15.
 */
Template.ListFlight.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList: function () {
    return Flight.find();
  }
});