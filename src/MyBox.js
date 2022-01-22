import "./MyBox.css";

function MyBox({ color, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <button
      className="MyBox"
      background-color={color}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></button>
  );
}

export default MyBox;
