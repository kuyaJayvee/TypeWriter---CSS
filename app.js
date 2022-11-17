const textEl = document.querySelector(".second-text");
const changeText = () => {
  
    setTimeout(() => {
      textEl.textContent = "Developer";
    },9000) 

    setTimeout(() => {
    	textEl.textContent = "Gamer";
    },4500)

    setTimeout(() => {
    	textEl.textContent = "Blogger";
    },0)
}
changeText();

setInterval(changeText , 13500)