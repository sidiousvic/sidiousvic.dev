//@ts-ignore
// import AudioSynth from "audiosynth";
//@ts-ignore
// const AudioContext = window.AudioContext || window.webkitAudioContext;

// const context = new AudioContext();

// let synth = new AudioSynth(context);

//   useEffect(() => {
//     //@ts-ignore
//     function SynthKeyDown(e) {
//       const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//       let note = key?.getAttribute("data-note");
//       synth.playNote(note, 1.0, 1.0, 0);
//       if (key) key.classList.add("keyDown");
//     }
//     //@ts-ignore
//     function SynthKeyUp(e) {
//       const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//       if (key) key.classList.remove("keyDown");
//     }

//     window.addEventListener("keydown", SynthKeyDown);
//     window.addEventListener("keyup", SynthKeyUp);

//     return function CleanUp() {
//       window.removeEventListener("keydown", SynthKeyDown);
//       window.removeEventListener("keyup", SynthKeyUp);
//     };
//   });

//   //@ts-ignore
//   function SynthMouseDown(e) {
//     const target = e.target as HTMLElement;
//     const note = target.getAttribute("data-note");
//     console.log(note);
//     synth.playNote(note, 1.0, 1.0, 0);
//     target.classList.add("keyDown");
//   }
//   //@ts-ignore
//   function SynthMouseUp(e) {
//     (e.target as HTMLElement).classList.remove("keyDown");
//   }

//   function renderWaveSvg() {
//     switch (wave) {
//       case "sine":
//         return <SineWave width={"100%"} />;
//       case "square":
//         return <SquareWave width={"100%"} />;
//       case "saw":
//         return <SawWave width={"100%"} />;
//       case "triangle":
//         return <TriangleWave width={"100%"} />;
//       default:
//         return null;
//     }
//   }

//   const [wave, setWave] = useState("sine");
//   //@ts-ignore
//   function toggleSynthSound() {
//     const waves = {
//       sine: { idx: 0, name: "sine", next: "square" },
//       square: { idx: 1, name: "square", next: "saw" },
//       saw: { idx: 2, name: "saw", next: "triangle" },
//       triangle: { idx: 3, name: "triangle", next: "sine" }
//     };
//     //@ts-ignore
//     setWave(waves[wave].next);
//     //@ts-ignore
//     synth.setOscWave(waves[wave].idx);
//     //@ts-ignore
//     console.log("Current wave is ", wave, waves[wave].idx);
//   }

//   useEffect(() => {
//     toggleSynthSound();
//   }, []);

// {/* <div
// className="synth"
// style={{
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundAttachment: "fixed",
//   borderRadius: "5px",
//   width: "90%",
//   height: "300px",
//   padding: "4rem",
//   margin: "0 4rem 4rem 4rem",
//   display: "flex",
//   color: "whitesmoke",
//   alignItems: "right",
//   justifyContent: "space-between"
// }}
// >
// <div className="synth-controls">
//   <div
//     className="synth-control synth-sound"
//     onClick={() => {
//       console.log("fired");
//       toggleSynthSound();
//     }}
//   >
//     <div className="synth-sound-label">{renderWaveSvg()}</div>
//   </div>
//   {/* <div className="synth-control synth-power">.</div>
//   <div className="synth-control synth-volume-up">.</div>
//   <div className="synth-control synth-volume-down">.</div> */}
// </div>
// <div
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   className="key"
//   data-key="81"
//   data-note={48}
//   id="C1-key"
// >
//   .
// </div>
// <div
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   className="black-key"
//   data-key="50"
//   data-note={49}
//   id="C#1-key"
// >
//   .
// </div>
// <div
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   className="key"
//   data-key="87"
//   data-note={50}
//   id="D1-key"
// >
//   .
// </div>
// <div
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   className="black-key"
//   data-key="51"
//   data-note={51}
//   id="D#3-key"
// >
//   .
// </div>
// <div
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   className="key"
//   data-key="69"
//   data-note={52}
//   id="E3-key"
// >
//   .
// </div>
// <div
//   className="key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="82"
//   data-note={53}
//   id="F3-key"
// >
//   .
// </div>
// <div
//   className="black-key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="53"
//   data-note={54}
//   id="F#3-key"
// >
//   .
// </div>
// <div
//   className="key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="84"
//   data-note={55}
//   id="G3-key"
// >
//   .
// </div>
// <div
//   className="black-key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="54"
//   data-note={56}
//   id="G#3-key"
// >
//   .
// </div>
// <div
//   className="key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="89"
//   data-note={57}
//   id="A3-key"
// >
//   .
// </div>
// <div
//   className="black-key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="55"
//   data-note={58}
//   id="A#3-key"
// >
//   .
// </div>
// <div
//   className="key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="85"
//   data-note={59}
//   id="B3-key"
// >
//   .
// </div>
// <div
//   className="key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="86"
//   data-note={60}
//   id="C4-key"
// >
//   .
// </div>
// <div
//   className="black-key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="71"
//   data-note={61}
//   id="C#4-key"
// >
//   .
// </div>
// <div
//   className="key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="66"
//   data-note={62}
//   id="D4-key"
// >
//   .
// </div>
// <div
//   className="black-key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="72"
//   data-note={63}
//   id="D#4-key"
// >
//   .
// </div>
// <div
//   className="key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="78"
//   data-note={64}
//   id="E4-key"
// >
//   .
// </div>
// <div
//   className="key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="77"
//   data-note={65}
//   id="F4-key"
// >
//   .
// </div>
// <div
//   className="black-key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="75"
//   data-note={66}
//   id="F#4-key"
// >
//   .
// </div>
// <div
//   className="key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="188"
//   data-note={67}
//   id="G4-key"
// >
//   .
// </div>
// <div
//   className="black-key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="76"
//   data-note={68}
//   id="G#4-key"
// >
//   .
// </div>
// <div
//   className="key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="190"
//   data-note={69}
//   id="A4-key"
// >
//   .
// </div>
// <div
//   className="black-key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="186"
//   data-note={70}
//   id="A#4-key"
// >
//   .
// </div>
// <div
//   className="key"
//   onMouseDown={SynthMouseDown}
//   onMouseUp={SynthMouseUp}
//   data-key="191"
//   data-note={71}
//   id="B4-key"
// >
//   .
// </div>
// </div> */}

// .synth {
//     /* background: rgb(20, 20, 20); */
//     transform: skewY(-2deg);
//   }

//   .synth-controls {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     align-items: center;
//     color: transparent;
//     user-select: none;
//     width: 20%;
//     margin: 2%;
//     border-radius: 5px;
//     /* background: rgb(15, 15, 15); */
//     /* border: 2px black dotted; */
//     /* border: 2px var(--sidious-red) dotted; */
//   }

//   .synth-control {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 40%;
//     height: 40%;
//     border-radius: 5px;
//     margin: 1%;
//     cursor: pointer;
//     border: 2px var(--sidious-red) dotted;
//     background-color: rgb(25, 25, 25);
//   }

//   .synth-sound-label {
//     font-size: 19px;
//     color: black;
//     font-family: Manhunter;
//   }

//   .synth-control:hover {
//     transform: scale(1.1);
//   }

//   .key {
//     color: transparent;
//     height: 90%;
//     background: rgb(15, 15, 15);
//     width: 6.6%;
//     margin: 0 0.4%;
//     cursor: pointer;
//     border: 2px var(--sidious-red) dotted;
//     border-radius: 0 0 5px 5px;
//     box-shadow: #000 0px 5px;
//     user-select: none;
//   }

//   @media screen and (max-width: 600px) {
//     .synth {
//       overflow: scroll;
//       flex-wrap: wrap;
//       flex-direction: column;
//     }
//     .synth-controls {
//       width: 100%;
//     }
//     .key {
//       width: 20%;
//       margin: 0 -1%;
//     }
//     .black-key {
//       width: 9% !important;
//       margin: 0 -1%;
//     }
//   }

//   .keyDown {
//     background: rgb(42, 255, 166) !important;
//     box-shadow: rgb(255, 86, 255) 0px 5px !important;
//     transform: translateY(3%);
//   }

//   .black-key {
//     border: 2px var(--sidious-red) dotted;
//     color: transparent;
//     background: rgb(25, 25, 25);
//     margin: 0 -2%;
//     width: 4%;
//     height: 70%;
//     border-radius: 0 0 5px 5px;
//     cursor: pointer;
//     z-index: 99;
//     box-shadow: #000 0px 5px;
//     user-select: none;
//   }
