let index = 0;
let msg = 'áWðÉ­cðÏ»ð Tð Mðª Æ¤ðrÏfolÎoá'; 
let rate = 150;
function display() {
  if (index < msg.length) {
    document.getElementById("msgs").innerHTML += msg.charAt(index);
    index++;
    setTimeout(display, rate);
  }
}