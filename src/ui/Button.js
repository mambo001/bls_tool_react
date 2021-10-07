
function Button({ color, text, className, onClick }) {

  return (
    <button
      className={`btn ${color} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
