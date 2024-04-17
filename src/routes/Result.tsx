import "../App.css";
import { usePredicer } from "../Hooks/usePrediced";


function App() {
  const {predicedText, predicedFeel} = usePredicer()


return (
    <>
      <section className="result-section">
        <p>Text: {predicedText} -- Feel {predicedFeel}</p>
      </section>
    </>
  );
}

export default App;
