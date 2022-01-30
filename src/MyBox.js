import "./MyBox.css";

function MyBox({ id, color, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <button
      id={id}
      className="MyBox"
      background-color={color}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></button>
  );
}

export default MyBox;
