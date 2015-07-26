if(!Posts.findOne()) {
  Posts.insert({
    _id: "hello-world",
    title: "Hello World Post",
    content: "This is the content"
  });
}

Meteor.publish('singlePost', function(id) {
  check(id, String);
  // Make a delay manually to show the loading state
  Meteor._sleepForMs(1000);
  return Posts.find({_id: id});
});