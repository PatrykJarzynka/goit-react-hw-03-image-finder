import { Component } from 'react';
import imageAPI from '../services/pixabay';
import ImageGalleryItem from './ImageGalleryItem.js';
import Button from './Button';
import { nanoid } from 'nanoid';
import Loader from './Loader';

let page = 1;

class ImageGallery extends Component {
  state = {
    current: 'idle',
    data: [],
  };

  apiState = {
    pending: () => this.setState({ current: 'pending' }),
    succes: () => this.setState({ current: 'succes' }),
    error: () => this.setState({ current: 'error' }),
    idle: () => this.setState({ current: 'idle' }),
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
        this.apiState.pending();
        let data = await imageAPI.fetchImages(nextName, page);
        this.setState({ data: data.hits });
        this.apiState.succes();
      } catch (error) {
        this.apiState.error();
      }
    }
  }

  handleSubmit = async (e, name) => {
    page++;
    try {
      this.apiState.pending();
      let newData = await imageAPI.fetchImages(name, page);
      this.setState(({ data }) => ({ data: [...data, ...newData.hits] }));
      this.apiState.succes();
    } catch (error) {
      this.apiState.error();
    }
  };

  render() {
    let items = this.state.data;
    let contacts = [];
    if (items) {
      contacts = items.map(item => (
        <ImageGalleryItem key={nanoid()} url={item.webformatURL} bigImg={item.largeImageURL} />
      ));
    }

    return (
      <div>
        {this.apiState.isPending() && <Loader />}
        {this.apiState.isSucces() && (
          <ul className="gallery">
            {contacts}
            <Button onClick={event => this.handleSubmit(event, this.props.name)}></Button>
          </ul>
        )}
      </div>
    );
  }
}

export default ImageGallery;
