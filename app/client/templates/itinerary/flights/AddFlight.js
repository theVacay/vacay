/**
 * Created by chanelsantiago on 11/15/15.
 */
/**
 * After successful addition of a new Flight document, go to Flight page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddFlightForm: {
    /**
     * After successful form submission, go to the ListFlight page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {

      Router.go('Itinerary');
    }
  }
});