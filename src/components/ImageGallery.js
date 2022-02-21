import { Component } from 'react';
import { fetchImages } from '../services/pixabay.js';

class ImageGallery extends Component {
  state = {
    current: 'idle',
  };

  apiState = {
    pending: () => this.state({ current: 'pending' }),
    succes: () => this.state({ current: 'succes' }),
    error: () => this.state({ current: 'error' }),
    idle: () => this.state({ current: 'idle' }),
    isPending: () => this.state.current === 'pending',
    isSucces: () => this.state.current === 'succes',
    isError: () => this.state.current === 'error',
    isIdle: () => this.state.current === 'idle',
  };

  async componentDidUpdate(prevProps) {
    const prevName = prevProps.name;
    const nextName = this.props.name;

    if (prevName !== nextName) {
      try {
        this.setState({ current: this.apiState.pending });
        const data = fetchImages(nextName);
        this.setState({ current: this.apiState.succes });
      } catch (error) {
        this.setState({ current: this.apiState.error });
      }
    }
  }

  render() {
    return <ul className="gallery"></ul>;
  }
}

export default ImageGallery;
