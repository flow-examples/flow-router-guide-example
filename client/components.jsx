PostSubs = new SubsManager();

MainLayout = React.createClass({
  render() {
    return <div>
      <header><h1>Kadira Blog</h1></header>
      <main>{this.props.content}</main>
      <footer>We love Meteor</footer>
    </div>;
  }
});

BlogHome = React.createClass({
  render() {
    return <div>
      <p>This is the home page of our blog</p>
      <p>
        <a href="/hello-world">See Hello World Post</a>
      </p>
    </div>;
  }
});

BlogPost = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {};
    var postId = this.props.postId;
    var handle = PostSubs.subscribe('singlePost', postId);
    if(handle.ready()) {
      data.post = Posts.findOne({_id: postId});
    }
    return data;
  },
  getContent() {
    return <div>
      <h3>{this.data.post.title}</h3>
      <p>{this.data.post.content}</p>
    </div>;
  },
  render() {
    return <div>
      <a href="/">Back</a>
      {this.data.post? this.getContent() : <p>Loading...</p>}
    </div>
  }
});
