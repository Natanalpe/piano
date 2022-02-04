import './App.css';
import React, { useEffect, useState } from 'react';
import AudioPlayer from './components/audioPlayer';

function App() {

  const audioPlayer = AudioPlayer();


  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  const doNote = () => {
    audioPlayer.playNote("C4")
  };
  const doSharpNote = () => {
    audioPlayer.playNote("D4")
  };
  const reNote = () => {
    audioPlayer.playNote("E4")
  };
  const reSharpNote = () => {
    audioPlayer.playNote("F4")
  };
  const miNote = () => {
    audioPlayer.playNote("G4")
  };
  const faNote = () => {
    audioPlayer.playNote("A4")
  };
  const faSharpNote = () => {
    audioPlayer.playNote("B4")
  };
  const solNote = () => {
    audioPlayer.playNote("C5")
  };
  const solSharpNote = () => {
    audioPlayer.playNote("D5")
  };
  const laNote = () => {
    audioPlayer.playNote("E5")
  };
  const laSharpNote = () => {
    audioPlayer.playNote("F5")
  };
  const siNote = () => {
    audioPlayer.playNote("G5")
  };
  const siSharpNote = () => {
    audioPlayer.playNote("A5")
  };
  document.addEventListener('keydown', function(event){
		console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
  })

  return (

    <div className="App">

{document.addEventListener("keyup", function(event) {
    if (event.keyCode === 65) {
     event.preventDefault();
     document.getElementById("a").click();
    }
    else if (event.keyCode === 83) {
      event.preventDefault();
      document.getElementById("s").click(); 
    }
    else if (event.keyCode === 68) {
      event.preventDefault();
      document.getElementById("d").click(); 
    }
    else if (event.keyCode === 70) {
      event.preventDefault();
      document.getElementById("f").click(); 
    }
    else if (event.keyCode === 71) {
      event.preventDefault();
      document.getElementById("g").click(); 
    }
    else if (event.keyCode === 72) {
      event.preventDefault();
      document.getElementById("h").click(); 
    }
    else if (event.keyCode === 74) {
      event.preventDefault();
      document.getElementById("j").click(); 
    }
    else if (event.keyCode === 75) {
      event.preventDefault();
      document.getElementById("k").click(); 
    }
    else if (event.keyCode === 76) {
      event.preventDefault();
      document.getElementById("l").click(); 
    }
    else if (event.keyCode === 186) {
      event.preventDefault();
      document.getElementById("ç").click(); 
    }
    else if (event.keyCode === 90) {
      event.preventDefault();
      document.getElementById("z").click(); 
    }
    else if (event.keyCode === 88) {
      event.preventDefault();
      document.getElementById("x").click(); 
    }
    else if (event.keyCode === 67) {
      event.preventDefault();
      document.getElementById("c").click(); 
    }
  })}

      <div className='piano'>
        <button id='a' onClick={doNote}>A</button>
        <button id='s' onClick={doSharpNote}>S</button>
        <button id='d' onClick={reNote}>D</button>
        <button id='f' onClick={reSharpNote}>F</button>
        <button id='g' onClick={miNote}>G</button>
        <button id='h' onClick={faNote}>H</button>
        <button id='j' onClick={faSharpNote}>J</button>
        <button id='k' onClick={solNote}>K</button>
        <button id='l' onClick={solSharpNote}>L</button>
        <button id='ç' onClick={laNote}>Ç</button>
        <button id='z' onClick={laSharpNote}>Z</button>
        <button id='x' onClick={siNote}>X</button>
        <button id='c' onClick={siSharpNote}>C</button>
      </div>
      <div className='instruments'>
        <h5>Escolha um Instumento</h5>
        <input list='instrumento' />
        <datalist id='instrumento'>
          <option>recurso ainda não disponivel</option>

        </datalist>
      </div>
    </div>
  );
}

export default App;
