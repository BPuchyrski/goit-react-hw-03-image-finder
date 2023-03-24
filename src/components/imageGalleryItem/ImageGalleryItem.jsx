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
