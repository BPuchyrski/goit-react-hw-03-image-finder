import PropTypes from 'prop-types';
const { Component } = require('react');

class Searchbar extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <header className="searchbar">
        <form onSubmit={onSubmit} className="searchForm">
          <button type="submit" className="SearchForm-button">
            <span className="button-label">Search</span>
          </button>

          <input
            name="searchFormInput"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func
}
