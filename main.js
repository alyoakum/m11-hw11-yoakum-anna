//Global Varibales
const myBoxes = document.getElementsByClassName('block');

//The Functionality
function loopThrough() {

};

//The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};
