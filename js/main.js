function playSound(e){
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio){return}; // stop the function from running
    audio.currentTime = 0; // rewind audio to beggining on every key press
    audio.play();
    key.classList.add("playing");// add the class to the current key thats playing

};

function removeTransition(e){
  if(e.propertyName !== "transform"){return}; // skip it if it's not a transform
  this.classList.remove("playing");
}

var keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));// listen for the end of the animation / transition
window.addEventListener("keydown", playSound);// listen for key events
