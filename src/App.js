import { useEffect, useState, useRef, useCallback } from "react";
import './App.css';



function App() {
  
  const drumPads = [
    {
      name:'Heater-1',
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      name:'Heater-2',
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      name:'Heater-3',
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      name:'Heater-4',
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      name:'Clap',
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      name:'Open-HH',
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      name:'Kick-n-hat',
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      name:'Kick',
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      name:'Closed-HH',
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];
  const [clickedPad, setClickedPad] = useState([]);
  const audioPlayer = useRef(null);
  const handleButtonPress = (e) =>{
    handleSound(e.key.toUpperCase(),drumPads);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleButtonPress)
    return () => document.removeEventListener("keydown", handleButtonPress);
  });



 
  function handleSound(id, pads) {
    const sound = document.getElementById(id);
    sound.play();
    const result = pads.filter((item)=>{
      return item.text === id;
    })
    setClickedPad(result[0]);
  }
  
  

  return (
    <div className='App'>
      <div id='drum-machine'>
          <div id='display'>{clickedPad.name}
          <input type='range' className="form-range" onChange={(e) => {
            audioPlayer.current.volume = e.target.value / 100;
          }}></input></div>
        <div className='pad-grid'>
          {drumPads.map((pad) => (
           <div className='drum-pad' id={pad.keyCode} onClick={() => handleSound(pad.text,drumPads)} key={pad.src}>
              {pad.text}
              <audio src={pad.src} id={pad.text} className='clip' ref={audioPlayer}></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
