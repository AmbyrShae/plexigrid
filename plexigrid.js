$( document ).ready(function() {

  var btnPress = "mark";

  tutorial();

  // click events
  $(".box").click(clickedBox);
  $("button").click(changeColor);

  // square clicked
  function clickedBox(box) {

    if(btnPress == "mark"){
      $(box.target).toggleClass("red");
      $(box.target).removeClass("grey");
    }

    if(btnPress == "block"){
      $(box.target).toggleClass("grey");
      $(box.target).removeClass("red");
    }

    gridComplete();
  }

  function changeColor(btn) {
    btnPress = btn.target.innerHTML;
  }

  function tutorial() {
    var selectedBoxes = [11, 15, 33, 41, 45, 51, 52, 53, 54, 55],
        markedBox;

    for(var i = 0; i < selectedBoxes.length; i++) {
      markedBox = document.getElementById(selectedBoxes[i]);
      markedBox.setAttribute("data-marked", "true");
    }

  }

  function gridComplete() {
    var markedBoxes = document.querySelectorAll('[data-marked="true"]'),
        unmarkedBoxes = document.querySelectorAll('[data-marked="false"]'),
        success,
        box,
        boxMarked,
        boxClass;

    success = Array.prototype.every.call(markedBoxes, function(el) {
      return (el.className.includes("red") == true);
    });
    // success = [markedBoxes[0], markedBoxes[1]].every(checkClass);

    console.log(success);
  }

  function checkClass(box) {
    console.log(box);
    return true;
  }

});
