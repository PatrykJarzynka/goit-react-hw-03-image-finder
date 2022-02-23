import styled from '@emotion/styled';

const FancyModal = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const Overlay = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  width: "100%",
  height: "100%"
});

function Modal({ url }) {
  return (
    <Overlay className="overlay">
      <FancyModal className="modal">
        <img src={url} alt="bigPicture" />
      </FancyModal>
    </Overlay>
  );
}

export default Modal;
