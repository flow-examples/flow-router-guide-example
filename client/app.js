Template.blogHome.helpers({
  posts: function() {
    return Posts.find();
  }
});

Template.blogHome.helpers({
  pathForPost: function() {
    var post = this;
    var params = {
        category: post.category,
        postId: post._id
    };
    var queryParams = {comments: "yes"};
    var routeName = "blogPost";
    var path = FlowRouter.path(routeName, params, queryParams);

    return path;
  }
});