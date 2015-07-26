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
  render() {
    return <div>
      <p>
        <a href="/">Back</a> <br/>
        This is a single blog post
      </p>
    </div>;
  }
});
