import Icon from "./Icon";

function Fab({ onClickHandler }) {
  return (
    <div className="fixed-action-btn">
      <button
        className="btn-floating btn-large blue darken-1"
        onClick={onClickHandler}
      >
        <Icon
          iconName="playlist_add"
          size="large"
          className="large material-icons"
        ></Icon>
      </button>
    </div>
  );
}

export default Fab;
