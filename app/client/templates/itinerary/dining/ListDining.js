Template.ListDining.helpers({

  /**
   * @returns {*} All of the Dining documents.
   */
  diningList: function () {
    return Dining.find();
  }
});