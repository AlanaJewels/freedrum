// Mapping keys to their respective drum pads and sounds
const drumPads = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open-HH",
    Z: "Kick-n'-Hat",
    X: "Kick",
    C: "Closed-HH"
  };
  
  // Get elements
  const display = document.getElementById("display");
  const pads = document.querySelectorAll(".drum-pad");
  const clips = document.querySelectorAll(".clip");
  
  // Function to play sound and update the display
  function playSound(id) {
    const audio = document.getElementById(`${id}-audio`);
    audio.play();
    display.innerText = drumPads[id];
  }
  
  // Event listeners for clicking on drum pads
  pads.forEach(pad => {
    pad.addEventListener("click", () => {
      playSound(pad.id);
    });
  });
  
  // Event listeners for key presses
  document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    if (drumPads[key]) {
      playSound(key);
    }
  });
  