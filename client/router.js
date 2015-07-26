FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blogHome"});
  }
});

FlowRouter.route('/blog/:category/:postId', {
  name: 'blogPost',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blogPost"}); 
  }
});