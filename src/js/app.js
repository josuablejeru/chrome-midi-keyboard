import WebMidi from "webmidi";
import { noteON } from "./liseners";

const keys = document.getElementById("keyboard-container");

console.log(keys);

WebMidi.enable(error => {
  if (error) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log("WebMidi enabled");
    const keyboard = WebMidi.getInputByName("SWISSONIC EasyKeys49");

    noteON(keyboard);
  }
});

console.log(keyboard);
