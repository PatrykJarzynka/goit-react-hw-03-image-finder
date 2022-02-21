
function ImageGalleryItem({ data }) {

    let items = data.hits;
    console.log(items)
    
    return (
      <li className="gallery-item">
        <img src="" alt="" />
      </li>
    );
}

export default ImageGalleryItem;