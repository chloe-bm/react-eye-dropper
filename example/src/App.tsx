import { useEyeDropper } from "@react-library-base/package";

const COLORS = [
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f39c12",
  "#d35400",
  "#c0392b",
];

function App() {
  const { onInit, color } = useEyeDropper();

  return (
    <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
      <button onClick={onInit}>SELECT</button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {COLORS.map((c) => (
          <div style={{ height: "200px", backgroundColor: c }}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
