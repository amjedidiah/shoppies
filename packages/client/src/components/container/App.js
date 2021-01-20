// Module import
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Asset imports
import 'assets/css/app.css';

// Component imports
import Header from 'components/presentation/Header';
import Jumbo from 'components/presentation/Jumbo';
import Nominations from 'components/container/Nominations';
import Footer from 'components/presentation/Footer';

// Action creator imports
import {handleInitialData} from 'redux/actions/shared';

/**
 * App component
 * @component
 * @constructor
 */
class App extends Component {
  static propTypes = {
    handleInitialData: PropTypes.func,
  }

  /**
   * Executes once component mounts
   * @return {Promise}
   */
  componentDidMount = () => this.props.handleInitialData();

  /**
   * Renders App component UI
   * @return {object} - The UI DOM object
   */
  render = () => <>
    <Header />
    <main>
      <Jumbo />
      <Nominations />
    </main>
    <Footer />
  </>
}

// App export
export default connect(null, {handleInitialData})(App);
