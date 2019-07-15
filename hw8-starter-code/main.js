// Global Variables
const myBoxes = document.getElementsByClassName('block');

// The Functionality
function loopThrough() {

  const changeColor = () => this.classList.toggle('new-color');

  for(let i = 0; i < this.textContent.length; i++) {
    setTimeout(changeColor, i * 1000);
  };

};

// The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};
