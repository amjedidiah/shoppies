// Module imports
import {Component} from 'react';

// Component imports
import MovieCard from 'components/container/MovieCard';
import omdbAPI from 'utils/omdbAPI';
import {FaSearch} from 'react-icons/fa';

/**
 * Search component
 * @component
 * @constructor
 *
 * @example
 *
 * return <Search />
 */
class Search extends Component {
  state = {
    page: 1,
    results: [],
    s: '',
    status: 'Type at least 3 characters to trigger a search...',
    totalResults: 0,
  };

  /**
   * Searches for movies
   * @param {string} [s]
   * @param {number} [page]
   * @return {Promise}
   */
  search = (s = this.state.s, page = this.state.page) =>
    this.setState(
        {
          results: [],
          status: 'Loading movie results',
          totalResults: 0,
        },
        () =>
          omdbAPI
              .get('/?apikey=ce4b5ffd', {params: {s, page: this.state.page}})
              .then(({data}) => {
                const results = data.Search;

                return this.setState(() =>
              results ?
                {
                  results,
                  status: 'Type at least 3 characters to trigger a search...',
                  totalResults: data.totalResults,
                } :
                {status: data['Error']},
                );
              })
              .catch((err) =>
                this.setState(
                    () => ({
                      results: [],
                      status: 'Movie not found!',
                      totalResults: 0,
                    }),
                    () => console.log(err),
                ),
              ),
    );

  /**
   * Sets search page result
   * @param {string} b
   * @return {Promise<object>}
   */
  setPage = (b) =>
    this.setState(
        ({page}) => ({page: b === 'prev' ? page - 1 : page + 1}),
        () => this.search(),
    );

  /**
   * Renders Search component UI
   * @return {object} - The UI DOM object
   */
  render = () => {
    const {page, results, status, totalResults} = this.state;

    /**
     * @type {string} - class for searchImages
     */
    const imgClass =
      'img-fluid--search ${3|rounded-top,rounded-right,rounded-bottom' +
      ',rounded-left,rounded-circle,|}';

    return (
      <form className="form-inline form--header flex-grow-1 mr-lg-5">
        <div
          className="input-group input-group--custom
      input--search rounded-pill"
        >
          <div className="input-group-prepend--custom border-0 py-2">
            <div
              className="input-group-text bg-transparent
          border-0 text-primary--custom"
            >
              <FaSearch />
            </div>
          </div>
          <input
            type="search"
            autoComplete="off"
            className="form-control form-control--custom
          rounded-pill py-1 dropdown-toggle"
            placeholder="Search movie..."
            aria-label="Search"
            id="dropdownSearchInput"
            data-toggle="dropdown"
            aria-haspopup="true"
            onChange={({target}) =>
              this.setState(
                  () => ({
                    s: target.value,
                    results: [],
                    status: 'Type at least 3 characters to trigger a search...',
                  }),
                  () => target.value.length > 2 && this.search(target.value),
              )
            }
          />
          <ul
            className="dropdown-menu dropdown-menu-bottom p-4 w-100 rounded"
            aria-labelledby="dropdownSearchInput"
          >
            {results.length > 0 ? (
              <>
                <li className="dropdown-header px-0 text-uppercase">
                  Related movies
                </li>
                {results.map((movie) => (
                  <li key={movie?.imdbID} className="dropdown-item p-0 mb-3">
                    <MovieCard
                      movie={movie}
                      xtraClassName={{
                        card: 'd-flex align-items-start',
                        img: imgClass,
                        info: 'p-3',
                      }}
                    />
                    <div className="dropdown-divider"></div>
                  </li>
                ))}
                <p>
                  {['prev', 'next'].map(
                      (b) =>
                        ((b === 'prev' && page !== 1) ||
                        (b === 'next' &&
                          totalResults !== 0 &&
                          page <= Math.floor(totalResults / 10))) && (
                          <button
                            key={b}
                            className="btn btn-outline--primary-2
                            btn-prop ml-auto"
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              this.setPage(b);
                            }}
                          >
                            {b}
                          </button>
                        ),
                  )}
                </p>
              </>
            ) : (
              <li className="dropdown-text px-0">{status}</li>
            )}
          </ul>
        </div>
      </form>
    );
  };
}

// Search export
export default Search;
