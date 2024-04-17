import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePredicer } from "../Hooks/usePrediced";

function App() {
    
    const [audio, setAudio] = useState<File | null>(null);
    const {setPredicedText, setPredicedFeel, predicedFeel} = usePredicer()

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {      

      const file = event.target.files?.[0] || null;
      setAudio(file)
    }

    const handleSubmit = async() => {
      const formData = new FormData();
      formData.append('file', audio ?? "");  
      
      try {
          const res = await fetch("http://localhost:8000/upload-audio/", {
            method : 'POST',
            body : formData
          });
          const data = await res.json()

          setPredicedFeel(data.Feel)
          setPredicedText(data.messagge)

        } catch (error) {
          console.log(`error detectado: ${error}`)
        }
      } 

    return (
    <>
      <section className="transcription-section">
        <h1>Transcriptor y Analizador de Sentimientos</h1>
        <div className="transcription-input">
          <label htmlFor="audio-file">Seleccionar archivo de audio:</label>
          <input type="file" id="audio-file" accept="audio/*" onChange={handleChange} />
          
        </div>
        {
          predicedFeel == "" ? <button onClick={handleSubmit} id="transcribe-button">
          Transcribir y Analizar Sentimientos
        </button > :
        <Link to={'results/'}> Ver Resultado </Link>
        }

        <footer>&copy; 2024 Made with ❤️ by Group 3.</footer>
      </section>
    </>
  );

}
export default App;
