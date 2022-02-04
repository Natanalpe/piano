import './App.css';
import React, { useEffect, useState } from 'react';
import AudioPlayer from './components/audioPlayer';


function App() {

  const audioPlayer = AudioPlayer();
  // const [data, setData] = useState();

  // useEffect(() => {
  //   api
  //     .get(`/danigb/soundfont-player/master/names/fluidR3.json`)
  //     .then((response) => setData(response.data))
  //     .catch((erro) => {
  //       console.error("Falha durante a requisição " + erro);
  //     });

  // }, []);

// const list = document.getElementById('instrumento');

// for (const i of Instrumentos) {
//   const option = document.createElement('option');
//   option.value = i;
//   list.appendChild(option);
// };


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


  return (

    <div className="App">

      {document.addEventListener("keyup", function (event) {
        if (event.key === "a") {
          event.preventDefault();
          document.getElementById("a").click();
        }
        else if (event.key === "s") {
          event.preventDefault();
          document.getElementById("s").click();
        }
        else if (event.key === "d") {
          event.preventDefault();
          document.getElementById("d").click();
        }
        else if (event.key === "f") {
          event.preventDefault();
          document.getElementById("f").click();
        }
        else if (event.key === "g") {
          event.preventDefault();
          document.getElementById("g").click();
        }
        else if (event.key === "h") {
          event.preventDefault();
          document.getElementById("h").click();
        }
        else if (event.key === "j") {
          event.preventDefault();
          document.getElementById("j").click();
        }
        else if (event.key === "k") {
          event.preventDefault();
          document.getElementById("k").click();
        }
        else if (event.key === "l") {
          event.preventDefault();
          document.getElementById("l").click();
        }
        else if (event.key === "ç") {
          event.preventDefault();
          document.getElementById("ç").click();
        }
        else if (event.key === "z") {
          event.preventDefault();
          document.getElementById("z").click();
        }
        else if (event.key === "x") {
          event.preventDefault();
          document.getElementById("x").click();
        }
        else if (event.key === "c") {
          event.preventDefault();
          document.getElementById("c").click();
        }

      })}

      <div className='piano'>
        <button className='sheet' id='a' onClick={doNote}>A</button>
        <button className='sheet' id='s' onClick={doSharpNote}>S</button>
        <button className='sheet' id='d' onClick={reNote}>D</button>
        <button className='sheet' id='f' onClick={reSharpNote}>F</button>
        <button className='sheet' id='g' onClick={miNote}>G</button>
        <button className='sheet' id='h' onClick={faNote}>H</button>
        <button className='sheet' id='j' onClick={faSharpNote}>J</button>
        <button className='sheet' id='k' onClick={solNote}>K</button>
        <button className='sheet' id='l' onClick={solSharpNote}>L</button>
        <button className='sheet' id='ç' onClick={laNote}>Ç</button>
        <button className='sheet' id='z' onClick={laSharpNote}>Z</button>
        <button className='sheet' id='x' onClick={siNote}>X</button>
        <button className='sheet' id='c' onClick={siSharpNote}>C</button>
      </div>
      <div className='instruments'>
        <h5>Escolha um Instumento</h5>

        <input name="instrument" onChange={(e) => audioPlayer.setInstrument(e.target.value)} list='instrumento' />
        <datalist id='instrumento'>
          <option>accordion</option>
          <option>acoustic_bass</option>
          <option>acoustic_grand_piano</option>
          <option>acoustic_guitar_nylon</option>
          <option>acoustic_guitar_steel</option>
          <option>agogo</option>
          <option>alto_sax</option>
          <option>applause</option>
          <option>bagpipe</option>
          <option>banjo</option>
          <option>baritone_sax</option>
          <option>bassoon</option>
          <option>bird_tweet</option>
          <option>blown_bottle</option>
          <option>brass_section</option>
          <option>breath_noise</option>
          <option>bright_acoustic_piano</option>
          <option>celesta</option>
          <option>cello</option>
          <option>choir_aahs</option>
          <option>church_organ</option>
          <option>clarinet</option>
          <option>clavinet</option>
          <option>contrabass</option>
          <option>distortion_guitar</option>
          <option>drawbar_organ</option>
          <option>dulcimer</option>
          <option>electric_bass_finger</option>
          <option>electric_bass_pick</option>
          <option>electric_grand_piano</option>
          <option>electric_guitar_clean</option>
          <option>electric_guitar_jazz</option>
          <option>electric_guitar_muted</option>
          <option>electric_piano_1</option>
          <option>electric_piano_2</option>
          <option>english_horn</option>
          <option>fiddle</option>
          <option>flute</option>
          <option>french_horn</option>
          <option>fretless_bass</option>
          <option>fx_1_rain</option>
          <option>fx_2_soundtrack</option>
          <option>fx_3_crystal</option>
          <option>fx_4_atmosphere</option>
          <option>fx_5_brightness</option>
          <option>fx_6_goblins</option>
          <option>fx_7_echoes</option>
          <option>fx_8_scifi</option>
          <option>glockenspiel</option>
          <option>guitar_fret_noise</option>
          <option>guitar_harmonics</option>
          <option>gunshot</option>
          <option>harmonica</option>
          <option>harpsichord</option>
          <option>helicopter</option>
          <option>honkytonk_piano</option>
          <option>kalimba</option>
          <option>koto</option>
          <option>lead_1_square</option>
          <option>lead_2_sawtooth</option>
          <option>lead_3_calliope</option>
          <option>lead_4_chiff</option>
          <option>lead_5_charang</option>
          <option>lead_6_voice</option>
          <option>lead_7_fifths</option>
          <option>lead_8_bass__lead</option>
          <option>marimba</option>
          <option>melodic_tom</option>
          <option>music_box</option>
          <option>muted_trumpet</option>
          <option>oboe</option>
          <option>ocarina</option>
          <option>orchestra_hit</option>
          <option>orchestral_harp</option>
          <option>overdriven_guitar</option>
          <option>pad_1_new_age</option>
          <option>pad_2_warm</option>
          <option>pad_3_polysynth</option>
          <option>pad_4_choir</option>
          <option>pad_5_bowed</option>
          <option>pad_6_metallic</option>
          <option>pad_7_halo</option>
          <option>pad_8_sweep</option>
          <option>pan_flute</option>
          <option>percussive_organ</option>
          <option>percussion</option>
          <option>piccolo</option>
          <option>pizzicato_strings</option>
          <option>recorder</option>
          <option>reed_organ</option>
          <option>reverse_cymbal</option>
          <option>rock_organ</option>
          <option>seashore</option>
          <option>shakuhachi</option>
          <option>shamisen</option>
          <option>shanai</option>
          <option>sitar</option>
          <option>slap_bass_1</option>
          <option>slap_bass_2</option>
          <option>soprano_sax</option>
          <option>steel_drums</option>
          <option>string_ensemble_1</option>
          <option>string_ensemble_2</option>
          <option>synth_bass_1</option>
          <option>synth_bass_2</option>
          <option>synth_brass_1</option>
          <option>synth_brass_2</option>
          <option>synth_choir</option>
          <option>synth_drum</option>
          <option>synth_strings_1</option>
          <option>synth_strings_2</option>
          <option>taiko_drum</option>
          <option>tango_accordion</option>
          <option>telephone_ring</option>
          <option>tenor_sax</option>
          <option>timpani</option>
          <option>tinkle_bell</option>
          <option>tremolo_strings</option>
          <option>trombone</option>
          <option>trumpet</option>
          <option>tuba</option>
          <option>tubular_bells</option>
          <option>vibraphone</option>
          <option>viola</option>
          <option>violin</option>
          <option>voice_oohs</option>
          <option>whistle</option>
          <option>woodblock</option>
          <option>xylophone</option>
        </datalist>
      </div>
    </div>
  );
}

export default App;
