import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
const { Component } = require('react');

class ImageGallery extends Component {
  render() {
    const { photos } = this.props;
    return (
      <ul className="ImageGallery">
        {photos.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              imageURL={image.webformatURL}
              imageLarge={image.largeImageURL}
              imageTags={image.tags}
            ></ImageGalleryItem>
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
