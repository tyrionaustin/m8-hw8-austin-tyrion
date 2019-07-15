// Global Variables
const myBoxes = document.getElementsByClassName('block');

// The Functionality
function loopThrough() {

  const changeColor = () => this.classList.toggle('aqua');

  for(let i = 0; i < this.textConent.length; i++) {

  };

};

// The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};
