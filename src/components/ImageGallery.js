import { Component } from 'react';
import imageAPI from '../services/pixabay';
import ImageGalleryItem from './ImageGalleryItem.js';
import Button from './Button';
import { nanoid } from 'nanoid';
import Loader from './Loader';
import styled from '@emotion/styled';
import Modal from './Modal.js';

let page = 1;

const FancyGallery = styled.ul({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '0px 20px',
  rowGap: '20px',
  columnGap: '20px',
  listStyle: 'none',
  justifyContent: 'center',
});

const FancyLoader = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

class ImageGallery extends Component {
  state = {
    current: 'idle',
    data: [],
    isClicked: false,
    bigUrl: '',
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

  handleClick = async (e, name) => {
    e.preventDefault();
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

  showBigPicture = bigImg => {
    this.setState({ isClicked: true, bigUrl: bigImg });
  };

  render() {
    let items = this.state.data;
    let contacts = [];
    if (items) {
      contacts = items.map(item => (
        <ImageGalleryItem
          key={nanoid()}
          url={item.webformatURL}
          bigImg={item.largeImageURL}
          showBigPicture={this.showBigPicture}
        />
      ));
    }

    console.log(this.state.bigUrl)
    return (
      <div>
        {this.apiState.isPending() && (
          <FancyLoader>
            <FancyGallery className="gallery">
              {contacts}
              <Button onClick={event => this.handleClick(event, this.props.name)}></Button>
            </FancyGallery>
            <Loader />
          </FancyLoader>
        )}
        {this.state.isClicked === true && (
          <div>
            <Modal url={this.state.bigUrl}></Modal>
            <FancyGallery className="gallery">
              {contacts}
              <Button onClick={event => this.handleClick(event, this.props.name)}></Button>
            </FancyGallery>
          </div>
        )}
        {this.apiState.isSucces() && this.state.isClicked === false && (
          <FancyGallery className="gallery">
            {contacts}
            <Button onClick={event => this.handleClick(event, this.props.name)}></Button>
          </FancyGallery>
        )}
      </div>
    );
  }
}

export default ImageGallery;
