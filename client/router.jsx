FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {content: <BlogHome />});
  }
});

FlowRouter.route('/:postId/edit', {
  action(params) {
    ReactLayout.render(MainLayout, {content: <EditPost {...params} />});
  }
});

FlowRouter.route('/:postId', {
  action(params) {
    ReactLayout.render(MainLayout, {content: <BlogPost {...params} />});
  }
});