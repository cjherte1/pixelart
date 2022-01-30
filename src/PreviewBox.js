import "./PreviewBox.css";

function PreviewBox({ id, color }) {
  return <div id={id} className="PreviewBox" background-color={color} />;
}

export default PreviewBox;
