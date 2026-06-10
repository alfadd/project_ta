export default function ColorPicker({
  selectedColor,
  setSelectedColor,
  setSelectedColorKey,  
  color,
  colorKey,
}) {
  return (
    <div
      className={`color-item ${selectedColor === color ? "active" : ""}`}
      onClick={() => {
        setSelectedColor(color);
        setSelectedColorKey(colorKey);
      }

      }
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
