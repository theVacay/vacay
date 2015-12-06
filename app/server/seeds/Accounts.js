/* When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0 && !Accounts.findUserByUsername("guest")) {
  if (!!Meteor.settings.defaultAccount) {
    Accounts.createUser({
      username: Meteor.settings.defaultAccount.username,
      password: Meteor.settings.defaultAccount.password
    });
  }
  else {
    console.log("No default user!  Please invoke meteor with a settings file.");
  }
}