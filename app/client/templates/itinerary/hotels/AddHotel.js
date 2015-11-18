/**
 * Created by chanelsantiago on 11/15/15.
 */
/**
 * After successful addition of a new Hotel document, go to Hotel page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddHotelForm: {
    /**
     * After successful form submission, go to the ListHotel page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {

      Router.go('Itinerary');
    }
  }
});