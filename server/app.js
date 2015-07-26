if(!Posts.findOne()) {
  var userId = Accounts.createUser({username: "the-owner", password: "password"});
  Posts.insert({
    _id: "hello-world",
    title: "Hello World Post",
    content: "This is the Hello World content",
    owner: userId
  });
}

Meteor.publish('singlePost', function(id) {
  check(id, String);
  Meteor._sleepForMs(500);
  return Posts.find({_id: id});
});