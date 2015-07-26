FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {content: <BlogHome />});
  }
});

FlowRouter.route('/add-new-post', {
  action(params) {
    ReactLayout.render(MainLayout, {content: <AddNewPost />});
  }
});

FlowRouter.route('/:postId', {
  action(params) {
    ReactLayout.render(MainLayout, {content: <BlogPost {...params} />});
  }
});