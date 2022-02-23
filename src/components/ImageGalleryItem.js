import { Component } from 'react';
import Modal from './Modal';

class ImageGalleryItem extends Component {
  state = {
    isClicked: false,
  };

  showBigPicture = () => {
    this.setState({ isClicked: true });
  };

  render() {
    return this.state.isClicked === false ? (
      <li className="gallery-item" onClick={this.showBigPicture}>
        <img src={this.props.url} alt="picture" />
      </li>
    ) : (
      <Modal url={this.props.bigImg}></Modal>
    );
  }
}

export default ImageGalleryItem;
