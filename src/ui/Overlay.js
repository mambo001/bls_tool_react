function Overlay({ isOpen, clickHandler }) {
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
        position: "fixed",
        background: "#000",
        opacity: 0.5,
        width: "100%",
        height: "100vh",
        left: 0,
        top: 0,
        zIndex: 998
      }}
      onClick={() => clickHandler()}
    ></div>
  );
}

export default Overlay;
