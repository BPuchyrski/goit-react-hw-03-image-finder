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
