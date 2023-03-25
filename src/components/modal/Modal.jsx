import PropTypes from 'prop-types';
const { Component } = require('react');

class Modal extends Component {
  render() {
    const { image, modalFunction } = this.props;
    return (
      <div onClick={modalFunction} className="Overlay">
        <div className="Modal">
          <img src={image} alt="ModalImage" />
        </div>
      </div>
    );
  }
}
export default Modal;

Modal.propTypes = {
  image: PropTypes.string,
  modalFunction: PropTypes.func
}