import { Fragment, Component } from 'react';
import styles from './UserFinder.module.css';

import Users from './Users';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
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
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  //last state & prop snapshot before the component updated
  componentDidUpdate(prevProps, prevState) {
    // if the searchTerm changed
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) => user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())),
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

        <Users users={this.state.filteredUsers} />
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
