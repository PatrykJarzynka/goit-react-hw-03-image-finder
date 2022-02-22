
function ImageGalleryItem({ url }) {

    
    return (
      <li className="gallery-item">
        <img src={url} alt="picture" />
      </li>
    );
}

export default ImageGalleryItem;