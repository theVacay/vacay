Template.ListCarRental.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  carrentalList: function () {
    return CarRental.find();
  }
});