// Module imports
import PropTypes from 'prop-types';

// Component imports
import BtnGroup from './BtnGroup';


// Asset imports
import award1 from 'assets/img/award1.png';
import 'assets/css/jumbo.css';


/**
 * Jumbo component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const authedUser=''
 * const onSetAuthedUser=()=>{}
 *
 * return <Jumbo
 *          authedUser={authedUser}
 *          onSetAuthedUser={onSetAuthedUser}
 *        />
 */
const Jumbo = ({authedUser, onSetAuthedUser}) => (
  <section className="jumbotron jumbotron-fluid bg-primary--custom text-white">
    <h2 className="d-none">Jumbotron</h2>
    <article className="container h-100">
      <div className="row align-items-center h-100">
        <div className="col-12 col-lg-7">
          <h3 className="jumbo-title">
            Shoppies{' '}
            <span
              className="award-text text-primary--custom--2
             font-weight-bold"
            >
              Award
            </span>
            <span
              className="p-1 p-sm-2 bg-primary--custom--2
            just-width just-height d-inline-block"
            ></span>
          </h3>
          <p className="lead my-4">
            We honour the best. Every movie has a story, but a few become epics.
            These are the ones we honour
          </p>
          <BtnGroup
            authedUser={authedUser}
            onSetAuthedUser={onSetAuthedUser}
            xtraClassName={{
              anon: {btn: 'btn-outline-white btn-lg-xl', text: 'large'},
              cancel: 'd-none',
              nominate: 'd-none',
              google: {
                btn: ' btn-outline-white btn-lg-xl mr-2 mr-sm-3',
                text: 'large',
              },
            }}
          />
        </div>
        <div className="d-none d-lg-block col-lg offset-lg-1">
          <div className="img-holder pt-xl-5">
            <img src={award1} className="img-fluid" alt="award" />
          </div>
        </div>
      </div>
    </article>
  </section>
);


Jumbo.propTypes = {
  /**
   * Jumbo authedUser
   */
  authedUser: PropTypes.string,
  /**
   * Jumbo onSetAuthedUser
   */
  onSetAuthedUser: PropTypes.func,
};

Jumbo.defaultProps = {
  authedUser: '',
  onSetAuthedUser: () => {},
};

// Jumbo export
export default Jumbo;
