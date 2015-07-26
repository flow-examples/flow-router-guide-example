FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {content: <BlogHome />});
  }
});

FlowRouter.route('/:postId', {
  action(params) {
    ReactLayout.render(MainLayout, {content: <BlogPost {...params} />});
  }
});