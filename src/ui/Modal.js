import Overlay from "./Overlay";

function Modal({ id, className, isOpen, fabHandler, children }) {
  const modalStyle = {
    open: {
      zIndex: "1003",
      display: "block",
      opacity: 1,
      top: "10%",
      transform: "scaleX(1) scaleY(1)",
    },
    close: {
      zIndex: "1003",
      display: "none",
      opacity: 0,
      top: "4%",
      transform: "scaleX(0.8) scaleY(0.8)",
    },
  };

  return (
    <>
      <Overlay isOpen={isOpen} clickHandler={fabHandler}></Overlay>
      <div
        className={`modal ${className}`}
        id={id}
        style={isOpen ? modalStyle.open : modalStyle.close}
      >
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
}

export default Modal;
