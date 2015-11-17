Template.ListAttractions.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  attractionsList: function () {
    return Attractions.find();
  }
});