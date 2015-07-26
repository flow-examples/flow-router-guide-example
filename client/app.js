Template.editPost.onCreated(function() {
  var self = this;
  self.postSubReady = new ReactiveVar();
  self.autorun(function() {
    var postId = FlowRouter.getParam('postId');
    var subHandle = self.subscribe('singlePost', postId);
    self.postSubReady.set(subHandle.ready());
  });
});

Template.editPost.helpers({
  authInProcess: function() {
    var postSubReady = Template.instance().postSubReady.get();
    return Meteor.loggingIn() || !postSubReady;
  },
  canShow: function() {
    var user = Meteor.user();
    if(!user) {
      return false;
    }

    var postId = FlowRouter.getParam('postId');
    var post = Posts.findOne({_id: postId});
    if(!post) {
      return false;
    }

    return post.owner === user._id;
  }
});

Template.login.events({
  'click #login-wrong-user': function() {
    Accounts.createUser({username: Random.id(), password: Random.id()});
  },
  'click #login-correct-user': function() {
    Meteor.loginWithPassword("the-owner", "password");
  }
});

Template.mainLayout.events({
  'click #logout': function() {
    Meteor.logout();
  }
});