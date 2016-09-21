// come up with javascript to repeat box

var btnPress = "mark";

tutorial();

// square clicked
function clickedBox(box) {
  // console.log(box);

  if(btnPress == "mark"){
    $(box).toggleClass("red");
    $(box).removeClass("grey");
  }

  if(btnPress == "block"){
    $(box).toggleClass("grey");
    $(box).removeClass("red");
  }
}

function changeColor(btn) {
  btnPress = btn.innerHTML;
}

function tutorial() {
  var selectedBoxes = [11, 15, 33, 41, 45, 51, 52, 53, 54, 55];
}

// console.log(box.getAttribute("data-marked"));
