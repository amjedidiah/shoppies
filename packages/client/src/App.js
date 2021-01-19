// Module import
import {Component} from 'react';
import objectifyArray from 'objectify-array';

// Utils import
import shoppiesAPI from 'utils/shoppiesAPI';

// Asset imports
import 'assets/css/app.css';

// Component imports
import Header from 'components/presentation/Header';
import Jumbo from 'components/presentation/Jumbo';
import Nominations from 'components/presentation/Nominations';

/**
 * App component
 * @component
 * @constructor
 */
class App extends Component {
  state = {
    authedUser: '',
    nominations: {},
  };

  /**
   * Generates authedUser
   * @param {string} length
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
   * @return {Promise<object>}
   */
  setAuthedUser = () => {
    const localAuthedUser = localStorage.getItem('authedUser');
    let newAuthedUser;

    if (!localAuthedUser) {
      newAuthedUser = this.makeid(12);
      localStorage.setItem('authedUser', newAuthedUser);
    }

    return this.setState(() => ({
      authedUser: localAuthedUser || newAuthedUser,
    }));
  };

  /**
   * Updates Nomination
   * @param {string} action
   * @param {{authedUser: string, movieID: string} | string} data
   * @return {Promise<object>}
   */
  onUpdateNomination = (action, data) =>
    action === 'add' ?
      shoppiesAPI
          .post('/nominations', {
            ...data,
            user: data.authedUser,
          })
          .then(({data}) =>
            this.setState(() => ({nominations: objectifyArray(data)})),
          )
          .catch((err) => console.log(err)) :
      shoppiesAPI
          .del('/nominations', data)
          .then(({data}) =>
            this.setState(() => ({nominations: objectifyArray(data)})),
          )
          .catch((err) => console.log(err));

  /**
   * Objectifies nomination data
   * @param {object} data
   * @return {object}
   */
  objectifyNominationResponse = (data) =>
    (data?.data || []).length > 0 ?
      objectifyArray(data?.data, {by: '_id'}) :
      {};

  /**
   * Executes once component mounts
   */
  componentDidMount = () => {
    shoppiesAPI
        .get('/nominations')
        .then(({data}) =>
          this.setState({
            nominations: this.objectifyNominationResponse(data),
          }),
        )
        .catch((err) => console.log(err));
    this.setAuthedUser();
  };

  /**
   * Renders App component UI
   * @return {object} - The UI DOM object
   */
  render = () => {
    const {authedUser, nominations} = this.state;

    return (
      <>
        <Header
          authedUser={authedUser}
          nominations={nominations}
          onSetAuthedUser={this.setAuthedUser}
          onUpdateNomination={this.onUpdateNomination}
        />
        <main>
          <Jumbo authedUser={authedUser} onSetAuthedUser={this.setAuthedUser} />
          <Nominations
            authedUser={authedUser}
            nominations={nominations}
            onSetAuthedUser={this.setAuthedUser}
            onUpdateNomination={this.updateonUpdateNomination}
          />
        </main>
        <footer>
          <div className="container">
            <div className="d-flex shadow bg-white p-3">
              <div className="flex-grow-1">amjedidiah &copy; 2021</div>
              <div className="text-right">
                <a
                  href="https://github.com/amjedidiah"
                  className="mr-3 large text-primary--custom-2"
                >
                  <span aria-label="Github" className="text-primary--custom-2">
                    <i className="fab fa-github"></i>{' '}
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/am-jedidiah/"
                  className="mr-3 large text-primary--custom-2"
                >
                  <span
                    aria-label="LinkedIn"
                    className="text-primary--custom-2"
                  >
                    <i className="fab fa-linkedin"></i>{' '}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };
}

// Export App
export default App;
