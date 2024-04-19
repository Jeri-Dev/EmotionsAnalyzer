import { Angrysvg } from "../assets/angry"
import { Happysvg } from "../assets/happy"
import { Neutralsvg } from "../assets/neutral"
import { Sadsvg } from "../assets/sad"
import "../App.css";



const feelings = [
    {"feel": "Happy", "img" : <Happysvg/>},
    {"feel": "Sad", "img" : <Sadsvg />},
    {"feel": "Angry", "img" : <Angrysvg />},
    {"feel": "Neutral", "img" : <Neutralsvg />}
  ]

export default function Results({text, feel} : {text : string, feel : number}) {
    return (
    <div>
      <div className="results-section">
       <div className="results-section_1">
        <p className="fell">The speaker is {feelings[feel].feel}</p>
       <div className="emoji">{feelings[feel].img}</div>

       </div>
     <div className="results-section_2">
     <p className="t1">Transcription</p>
        <p className="transcription">{text}</p>
     </div>
    
    </div>
    <button onClick = {() => {
        location.reload()
     }} id="transcribe-button" style={{marginTop : 30}}>
                Transcribe another one
              </button>
   
    </div>

  )
}
