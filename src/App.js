import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import styled from '@emotion/styled';

const FancyApp = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '16px',
  paddingBottom: '24px',
});

class App extends Component {
  state = {
    name: '',
  };

  handleFormSubmit = name => {
    this.setState({ name: name });
  };

  render() {
    return (
      <FancyApp>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery name={this.state.name}></ImageGallery>
      </FancyApp>
    );
  }
}

export default App;
