Template.blogPost.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var postId = FlowRouter.getParam('postId');
    self.subscribe('singlePost', postId);  
  });
});

Template.blogPost.helpers({
  post: function() {
    var postId = FlowRouter.getParam('postId');
    var post = Posts.findOne({_id: postId}) || {};
    return post;
  }
});