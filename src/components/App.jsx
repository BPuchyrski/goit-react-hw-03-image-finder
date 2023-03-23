import Searchbar from './searchbar/Searchbar';
import Loader from './loader/Loader';
import ImageGallery from './imageGallery/ImageGallery';
import { Component } from 'react';
import axios from 'axios';

// const apiKey = '33158907-0652e41e9f508e65904cd564d';

export class App extends Component {
  state = {
    isLoaderOn: false,
    photos: [],
  };

  // async componentDidMount() {
  //   const response = await axios.get(
  //     'https://pixabay.com/api/?q=cat&page=1&key=33158907-0652e41e9f508e65904cd564d&image_type=photo&orientation=horizontal&per_page=12'
  //   );
  //   console.log(response.data.hits);
  // }

  getInput = async e => {
    e.preventDefault();
    this.setState({ isLoaderOn: true });
    let inputValue = e.target.elements.searchFormInput.value;
    if (inputValue === '') {
      this.setState({ isLoaderOn: false });
    } else {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${inputValue}&page=1&key=33158907-0652e41e9f508e65904cd564d&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState({ photos: response.data.hits, isLoaderOn: false });
    }
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.getInput}></Searchbar>
        {this.state.isLoaderOn && <Loader></Loader>}
        <ImageGallery photos={this.state.photos}></ImageGallery>
      </div>
    );
  }
}
