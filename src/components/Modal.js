function Modal({ url }) {
  return (
    <div className="overlay">
      <div className="modal">
        <img src={url} alt="bigPicture" />
      </div>
    </div>
  );
}

export default Modal;
