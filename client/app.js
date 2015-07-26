PostSubs = new SubsManager();

Template.blogPost.onCreated(function() {
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function() {
        var postId = FlowRouter.getParam('postId');
        var handle = PostSubs.subscribe('singlePost', postId);
        self.ready.set(handle.ready());
    });
});

Template.blogPost.helpers({
    postReady: function() {
        return Template.instance().ready.get();
    }
});

Template.blogPost.helpers({
  post: function() {
    var postId = FlowRouter.getParam('postId');
    var post = Posts.findOne({_id: postId}) || {};
    return post;
  }
});