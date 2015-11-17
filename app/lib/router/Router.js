/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Flight"); },
  loadingTemplate: 'Loading'
});


Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListStuff'
});

Router.route('/add', {
  name: 'AddStuff'
});

Router.route('/addflight', {
  name: 'AddFlight'
});

Router.route('/listflight', {
  name: 'ListFlight'
});


Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});

Router.route('/flight/:_id', {
  name: 'EditFlight',
  data: function() { return Flight.findOne(this.params._id); }
});
