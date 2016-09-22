$( document ).ready(function() {

  var btnPress = "mark",
      funcArray = [],
      selectedBoxes,
      markedBox,
      markedBoxes,
      markedPass,
      unmarkedBoxes,
      unmarkedPass,
      success;

  tutorial();
  funcArray.push(levelOne, levelTwo);

  // click events
  $(".box").click(clickedBox);
  $(".colorBtn").click(changeColor);
  $(".levelBtn").click(clearGrid);

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

// changes what color is used depending on what button is clicked
  function changeColor(btn) {

    btnPress = btn.target.innerHTML;

  }

// initialize tutorial
  function tutorial() {

    document.querySelector(".level>span").innerHTML = "tutorial";

    selectedBoxes = [11, 15, 33, 41, 45, 51, 52, 53, 54, 55];

    for(var i = 0; i < selectedBoxes.length; i++) {
      markedBox = document.getElementById(selectedBoxes[i]);
      markedBox.setAttribute("data-marked", "true");
    }

  }

// initialize tutorial
  function levelOne() {

    document.querySelector(".level>span").innerHTML = "level 1";

    selectedBoxes = [11, 12, 14, 15, 21, 24, 32, 33, 34, 42, 45, 51, 52, 54, 55];

    for(var i = 0; i < selectedBoxes.length; i++) {
      markedBox = document.getElementById(selectedBoxes[i]);
      markedBox.setAttribute("data-marked", "true");
    }

  }

// initialize tutorial
  function levelTwo() {

    document.querySelector(".level>span").innerHTML = "level 2";

    selectedBoxes = [14, 15, 22, 23, 24, 41, 42, 43, 44, 45, 53];

    for(var i = 0; i < selectedBoxes.length; i++) {
      markedBox = document.getElementById(selectedBoxes[i]);
      markedBox.setAttribute("data-marked", "true");
    }

  }
// checks to see that puzzle is complete
// if it is complete, display success and enable level button
  function gridComplete() {

    markedBoxes = document.querySelectorAll('[data-marked="true"]'),
    unmarkedBoxes = document.querySelectorAll('[data-marked="false"]'),
    success = false;

    markedPass = Array.prototype.every.call(markedBoxes, function(el) {
      return (el.className.includes("red") == true);
    });

    unmarkedPass = Array.prototype.every.call(unmarkedBoxes, function(el) {
      return (el.className.includes("red") == false);
    });

    if(markedPass && unmarkedPass) {
      success = true;
      document.querySelector(".complete").style.visibility="visible";
      document.querySelector(".levelBtn").disabled= false;
    }

    if(success == false) {
      document.querySelector(".complete").style.visibility="hidden";
      document.querySelector(".levelBtn").disabled= true;
    }

  }

// clears grid for next level and disables next level button
  function clearGrid() {

    selectedBoxes = document.querySelectorAll(".box");
    Array.prototype.forEach.call(selectedBoxes, function(el) {
      $(el).removeClass("red grey");
      el.setAttribute("data-marked", "false");
    });

    document.querySelector(".level>span").innerHTML = "";
    document.querySelector(".complete").style.visibility="hidden";
    document.querySelector(".levelBtn").disabled= true;

    if(funcArray.length > 0){
      funcArray.shift()();
    }
    else{
      document.querySelector(".level>span").innerHTML = "end of game";
    }

  }

});
