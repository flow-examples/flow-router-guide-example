FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blogHome"});
  }
});

FlowRouter.route('/:postId/edit', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "editPost"});
  }
});

FlowRouter.route('/:postId', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blogPost"});
  }
});