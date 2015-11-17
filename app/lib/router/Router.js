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

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Hotel"); },
  loadingTemplate: 'Loading'
});

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Dining"); },
  loadingTemplate: 'Loading'
});

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("CarRental"); },
  loadingTemplate: 'Loading'
});

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Attractions"); },
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

Router.route('/addhotel', {
  name: 'AddHotel'
});

Router.route('/listhotel', {
  name: 'ListHotel'
});

Router.route('/itinerary', {
  name: 'Itinerary'
});

Router.route('/adddining', {
  name: 'AddDining'
});

Router.route('/listdining', {
  name: 'ListDining'
});

Router.route('/addcarrental', {
  name: 'AddCarRental'
});

Router.route('/listcarrental', {
  name: 'ListCarRental'
});

Router.route('/addattractions', {
  name: 'AddAttractions'
});

Router.route('/listattractions', {
  name: 'ListAttractions'
});

Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});

Router.route('/flight/:_id', {
  name: 'EditFlight',
  data: function() { return Flight.findOne(this.params._id); }
});

Router.route('/hotel/:_id', {
  name: 'EditHotel',
  data: function() { return Hotel.findOne(this.params._id); }
});

Router.route('/dining/:_id', {
  name: 'EditDining',
  data: function() { return Dining.findOne(this.params._id); }
});

Router.route('/carrental/:_id', {
  name: 'EditCarRental',
  data: function() { return CarRental.findOne(this.params._id); }
});

Router.route('/attractions/:_id', {
  name: 'EditAttractions',
  data: function() { return Attractions.findOne(this.params._id); }
});