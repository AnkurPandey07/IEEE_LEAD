let index = 0;
let msg = '𒆜𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓣𝓸 𝓜𝔂 𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸𒆜'; 
let rate = 150;
function display() {
  if (index < msg.length) {
    document.getElementById("msgs").innerHTML += msg.charAt(index);
    index++;
    setTimeout(display, rate);
  }
}