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
        <a href="/">Home</a> 
        {this.data.user? this.getLogoutButton() : null}
      </p>
      <main>{this.props.content}</main>
      <footer>We love Meteor</footer>
    </div>;
  }
});

EditPost = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var postId = this.props.postId;
    var post = Posts.findOne({_id: postId});
    var singlePostReady = Meteor.subscribe('singlePost', postId).ready();
    var data = {
      authInProcess: Meteor.loggingIn() || !singlePostReady,
      canShow: () => {
        var user = Meteor.user();
        if(!user) {
          return false;
        }

        if(!post) {
          return false;
        }

        var hasPermission = post.owner === user._id;
        return hasPermission;
      }()
    };

    return data;
  },
  getForm() {
    return <p>
      {"This is the area for editing the post"}
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
        <a href="/">Back</a> | &nbsp;
        <a href="/hello-world/edit">Edit this post</a> 
      </p>
      <p>
        This is a single blog post
      </p>
    </div>;
  }
});
