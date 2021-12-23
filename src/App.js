import Card from "./Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="card-container">
        <Card value="#f44336" />
        <Card value="#4caf50" />
        <Card value="#2196f3" />
      </div>
    </div>
  );
}
