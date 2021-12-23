import { DemoExpandedCard } from "./DemoExpandedCard";
import { DemoNormalCard } from "./DemoNormalCard";
import ExpandableCard from "./ExpandableCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ExpandableCard
        openOnContainer
        renderNormalCard={() => (
          <div className="normal-card bg-red-500">
            <div>Normal card</div>
          </div>
        )}
        renderExpandedCard={() => (
          <div className="expanded-card bg-red-500">Expanded card</div>
        )}
      />
      <div className="h-3" />
      <ExpandableCard
        openOnContainer={false}
        renderNormalCard={({ open }) => <DemoNormalCard expand={open} />}
        renderExpandedCard={() => <DemoExpandedCard />}
      />
    </div>
  );
}
