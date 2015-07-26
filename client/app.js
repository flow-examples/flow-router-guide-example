Template.addNewPost.helpers({
  authInProcess: function() {
    return Meteor.loggingIn();
  },
  canShow: function() {
    return !!Meteor.user();
  }
});

Template.login.events({
  'click button': function() {
    Accounts.createUser({username: Random.id(), password: Random.id()});
  }
});

Template.mainLayout.events({
  'click #logout': function() {
    Meteor.logout();
  }
});