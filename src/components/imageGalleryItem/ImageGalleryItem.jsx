import PropTypes from 'prop-types';
const { Component } = require('react');

class ImageGalleryItem extends Component {
  render() {
    const { imageURL, imageTags, onClick, imageLarge } = this.props;
    return (
      <li onClick={onClick} className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={imageURL}
          alt={imageTags}
          name={imageLarge}
        ></img>
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string,
  imageTags: PropTypes.string,
  onClick: PropTypes.func,
  imageLarge: PropTypes.string
}
