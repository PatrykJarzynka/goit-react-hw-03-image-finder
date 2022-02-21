import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    name: '',
  };

  handleFormSubmit = name => {
    this.setState({ name: name });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery name={this.state.name}></ImageGallery>
      </div>
    );
  }
}

export default App;
