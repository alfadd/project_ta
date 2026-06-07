export default function ColorPicker({
  selectedColor,
  setSelectedColor,
  color,
  colorKey,
}) {
  return (
    <div
      className={`color-item ${selectedColor === color ? "active" : ""}`}
      onClick={() => setSelectedColor(color)}
    >
      <div
        className="color-square"
        style={{
          backgroundColor: color,
        }}
      ></div>
      <p>{colorKey}</p>
    </div>
  );
}
