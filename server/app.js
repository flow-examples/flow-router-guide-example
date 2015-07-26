if(!Posts.findOne({})) {
  Posts.insert({
    _id: "hello-world",
    category: "meteor",
    title: "Hello World",
    content: "This is the hello world post"
  });
}