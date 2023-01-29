import React, { Component } from 'react';
import classes from './User.module.css';

// class-based component
class User extends Component {
  componentWillUnmount() {
    console.log('User will unmount!');
  }

  // everytime component is called in JSX, render is then called
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// functional component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
