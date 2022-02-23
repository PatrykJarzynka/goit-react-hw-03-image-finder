import { Component } from 'react';
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
  render() {
    return (
      <FancyItem className="gallery-item" onClick={this.props.onClick}>
        <FancyImg src={this.props.url} alt="picture" />
      </FancyItem>
    );
  }
}

export default ImageGalleryItem;
