import PropTypes from 'prop-types';
const { Component } = require('react');

class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="ButtonDiv">
        <button onClick={onClick} className="Button">
          Load more
        </button>
      </div>
    );
  }
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func
}