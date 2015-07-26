MainLayout = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },
  logout() {
    Meteor.logout();
  },
  getLogoutButton() {
    return <span>
      &nbsp;
      <button onClick={this.logout}>Logout</button>
    </span>
  },
  render() {
    return <div>
      <header><h1>Kadira Blog</h1></header>
      <p>
        Navigation:&nbsp;
        <a href="/">Home</a>&nbsp; | &nbsp;
        <a href="/add-new-post">Add New Post</a>
        {this.data.user? this.getLogoutButton() : null}
      </p>
      <main>{this.props.content}</main>
      <footer>We love Meteor</footer>
    </div>;
  }
});

AddNewPost = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {
      authInProcess: Meteor.loggingIn(),
      canShow: !!Meteor.user()
    };

    return data;
  },
  getForm() {
    return <p>
      This is the area for adding a new post
    </p>;
  },
  noAuthMessage() {
    return <p>
      {"You are not authorized to view this page."}
      <Login />
    </p>;
  },
  getContent() {
    return <div>
      {this.data.canShow? this.getForm() : this.noAuthMessage() }
    </div>;
  },
  render() {
    return <div>
      {this.data.authInProcess?  <p>Loading...</p> : this.getContent()}
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
