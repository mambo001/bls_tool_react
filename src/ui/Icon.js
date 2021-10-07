import 'material-icons/iconfont/material-icons.css';

function Icon({ iconName, color, size, align }) {
  return (
    <i
      style={{
        userSelect: "none",
      }}
      className={`material-icons ${color}-text ${size} ${align}`}
    >
      {iconName}
    </i>
  );
}

export default Icon;
