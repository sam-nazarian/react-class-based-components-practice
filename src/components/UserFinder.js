import { Fragment, Component } from 'react';
import styles from './UserFinder.module.css';
import UsersContext from '../store/users-context';

import Users from './Users';
import ErrorBoundary from './ErrorBoundry';

class UserFinder extends Component {
  //can only have 1 static context per class like this
  static contextType = UsersContext; //gets context from UsersContext file

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  // componentDidUpdate() {
  //   console.log('component updated');
  // }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  //last state & prop snapshot before the component updated
  componentDidUpdate(prevProps, prevState) {
    // if the searchTerm changed
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>

        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

/*
const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(DUMMY_USERS.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))); //if username matches searchTerm, put the user in an array
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
    // setFilteredUsers(DUMMY_USERS.filter((user) => user.name.toLowerCase().includes(event.target.value.toLowerCase()))); //this also works
  };

  return (
    <Fragment>
      <div className={styles.finder}>
        <input type="search" onChange={searchChangeHandler} />
      </div>

      <Users users={filteredUsers} />
    </Fragment>
  );
};
*/

export default UserFinder;
