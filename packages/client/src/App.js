// Module import
import {Component} from 'react';

// Utils import
import shoppiesAPI from 'utils/shoppiesAPI';

// Asset imports
import 'assets/css/app.css';

// Component imports
import Header from 'components/presentation/Header';
import Jumbo from 'components/presentation/Jumbo';
import Nominations from 'components/presentation/Nominations';
import Footer from 'components/presentation/Footer';

/**
 * App component
 * @component
 * @constructor
 */
class App extends Component {
  state = {
    authedUser: '',
    nominations: [],
  };

  /**
   * Generates authedUser
   * @param {string} length - The length of the returned id
   * @return {string}
   */
  makeid = (length) => {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  /**
   * Sets authedUser
   */
  setAuthedUser = () => {
    const localAuthedUser = localStorage.getItem('authedUser');
    let newAuthedUser;

    if (!localAuthedUser) {
      newAuthedUser = this.makeid(12);
      localStorage.setItem('authedUser', newAuthedUser);
    }

    this.setState({authedUser: localAuthedUser || newAuthedUser});
  };

  /**
   * Updates Nomination
   * @param {string} action
   * @param {{imdbID: string, userID: string}} data
   * @return {Promise<object>}
   */
  onUpdateNomination = (action, data) =>
    action === 'nominate' ?
      shoppiesAPI
          .post('/nominations', {
            ...data,
            _id: this.makeid(12),
          })
          .then(({data}) => this.setState({nominations: data}))
          .catch((err) => console.log(err)) :
      shoppiesAPI
          .del('/nominations', data)
          .then(({data}) => this.setState({nominations: data}))
          .catch((err) => console.log(err));

  /**
   * Executes once component mounts
   */
  componentDidMount = () => {
    shoppiesAPI
        .get('/nominations')
        .then(({data}) => this.setState({nominations: data}))
        .catch((err) => console.log(err));
    this.setAuthedUser();
  };

  /**
   * Renders App component UI
   * @return {object} - The UI DOM object
   */
  render = () => {
    const {authedUser, nominations} = this.state;

    /**
     * @type {array}
     */
    const authedUserNominations = nominations.filter(
        ({userID}) => authedUser === userID,
    );

    return (
      <>
        <Header
          authedUser={authedUser}
          authedUserNominations={authedUserNominations}
          onUpdateNomination={this.onUpdateNomination}
        />
        <main>
          <Jumbo />
          <Nominations
            authedUser={authedUser}
            authedUserNominations={authedUserNominations}
            nominations={nominations}
            onUpdateNomination={this.onUpdateNomination}
          />
        </main>
        <Footer />
      </>
    );
  };
}

// App export
export default App;
