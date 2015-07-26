Login = React.createClass({
  login() {
    Accounts.createUser({username: Random.id(), password: Random.id()});
  },
  render() {
    return <p>
      <button onClick={this.login}>Login</button>
    </p>;
  }
});