// Asset imports
import award1 from 'assets/img/award1.png';
import 'assets/css/jumbo.css';

/**
 * Jumbo component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <Jumbo />
 */
const Jumbo = () => (
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
            Search a movie to nominate for the Shoppies award, or nominate one
            from our recent nominations
          </p>
          <p>
            We honour the best. Every movie has a story, but a few become epics.
            These are the ones we honour.
          </p>
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

// Jumbo export
export default Jumbo;
