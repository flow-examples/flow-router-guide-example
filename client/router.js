FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blogHome"});
  }
});

FlowRouter.route('/add-new-post', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "addNewPost"});
  }
});

FlowRouter.route('/:postId', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blogPost"});
  }
});