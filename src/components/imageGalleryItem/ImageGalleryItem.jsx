const { Component } = require('react');

class ImageGalleryItem extends Component {
  render() {
    const { imageURL, imageTags } = this.props;
    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={imageURL}
          alt={imageTags}
        ></img>
      </li>
    );
  }
}

export default ImageGalleryItem;
