import { Component } from 'react';
import Modal from './Modal';
import styled from '@emotion/styled';

const FancyItem = styled.li({
  width: '450px',
});

const FancyImg = styled.img({
  display: 'block',
  height: '100%',
  width: '100%',
  objectFit: 'cover',
});

class ImageGalleryItem extends Component {
  state = {
    isClicked: false,
  };

  showBigPicture = () => {
    this.setState({ isClicked: true });
  };

  render() {
    return this.state.isClicked === false ? (
      <FancyItem className="gallery-item" onClick={this.showBigPicture}>
        <FancyImg src={this.props.url} alt="picture" />
      </FancyItem>
    ) : (
      <Modal url={this.props.bigImg}></Modal>
    );
  }
}

export default ImageGalleryItem;
