import { Component } from 'react';
import imageAPI from '../services/pixabay';
import ImageGalleryItem from './ImageGalleryItem.js';
import Button from './Button';
import { nanoid } from 'nanoid';

class ImageGallery extends Component {
  state = {
    current: 'idle',
    data: '',
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
        const data = await imageAPI.fetchImages(nextName);
        this.setState({ data: data, current: this.apiState.succes });
      } catch (error) {
        this.setState({ current: this.apiState.error });
      }
    }
  }

    

  render() {
    let items = (this.state.data).hits;
    let contacts = [];
    if (items) {
      contacts = items.map(item => <ImageGalleryItem key={nanoid()} url={item.webformatURL}/>);
    }

    return contacts.join() === "" ?(
      <ul className="gallery">
      </ul>
    ) :( <ul className="gallery">
        {contacts}
        <Button></Button>
      </ul>
    );
  }
}

export default ImageGallery;
