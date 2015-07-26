Login = React.createClass({
  login() {
    Accounts.createUser({username: Random.id(), password: Random.id()});
  },
  loginAsWrongUser() {
    Accounts.createUser({username: Random.id(), password: Random.id()});
  },
  loginAsCorrectUser() {
    Meteor.loginWithPassword("the-owner", "password");
  },
  render() {
    return <p>
      <button onClick={this.loginAsWrongUser}>Login as a wrong user</button> 
      &nbsp;
      <button onClick={this.loginAsCorrectUser}>Login as the correct user</button>
    </p>;
  }
});