import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {
  constructor() {
    super();
    // in class-based components there can only be 1 state which MUST be an object
    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler() {
    // When a traditional function is called, 'this' refers to the global object (or undefined in strict mode) rather than the component instance.
    // console.log('this Keyword: ', this);

    // this.state.showUsers = false; //DOES NOT WORK!!
    this.setState((curState) => {
      // REMEMBER, states must always be an object
      return { showUsers: !curState.showUsers }; //react does not overwrite, react merges the objects, (the opposite of setShowUsers() in functional components)
    });
  }

  render() {
    // can define helper const in render method
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>{this.state.showUsers ? 'Hide' : 'Show'} Users</button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

/*
const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState); //react overwrites the old state, react doesn't merge it
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>{showUsers ? 'Hide' : 'Show'} Users</button>
      {showUsers && usersList}
    </div>
  );
};
*/

export default Users;
