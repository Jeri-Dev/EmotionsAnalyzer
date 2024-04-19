import "../App.css";
import { useState } from "react";
import { usePredicer } from "../Hooks/usePrediced";
import { ScaleLoader } from "react-spinners";
import Results from "../components/results";

function App() {
  const [audio, setAudio] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [prediced, setPrediced] = useState(false);
  const [feel_, setFeel] = useState(0);

  const { setPredicedText, setPredicedFeel, predicedText } = usePredicer();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setAudio(file);
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", audio ?? "");

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:8000/upload-audio`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      setPredicedFeel(data.Feel);
      setPredicedText(data.text);

      switch (data.Feel) {
        case "Happy":
          setFeel(0);
          break;
        case "Sad":
          setFeel(1);
          break;
        case "Angry":
          setFeel(2);
          break;
        case "Confused":
          setFeel(3);

          break;

        default:
          setFeel(0);

          break;
      }

      setLoading(false);
      setPrediced(true);
    } catch (error) {
      console.log(`error detectado: ${error}`);
    }
  };

  return (
    <>
      <section className="transcription-section">
       {!prediced ? <h1>
Transcriber and Sentiment Analyzer</h1> : <h1>Results</h1>
  }
        {!loading ? (
          !prediced ? (
            <form action="">
              <label
                htmlFor="images"
                className="drop-container"
                id="dropcontainer"
              >
                <span className="drop-title">Drop the audio here</span>
                or
                <input
                  type="file"
                  id="audio-file"
                  accept="audio/*"
                  onChange={handleChange}
                  required
                />
              </label>
              <button onClick={handleSubmit} id="transcribe-button">
                Transcribe Text
              </button>
            </form>
          ) : (
            <Results text={predicedText} feel={feel_} />
          )
        ) : (
          <div>
            {" "}
            <ScaleLoader color="#007bff" />{" "}
          </div>
        )}
        <footer>&copy; 2024 Made with ❤️ by Group 3.</footer>
      </section>
    </>
  );
}
export default App;
