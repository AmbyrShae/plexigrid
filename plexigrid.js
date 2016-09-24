/**
 * This file drives the game.
 * For most methods, we need the elements
 * in the document to be loaded, therefore
 * we use the ready() function.
 */
$(document).ready(function() {
    // declare/initialize variables
    var btnPress = "mark", // this initializes the game to "mark" boxes
        funcArray = [], // an array of function calls to proceed to next level
        rules = [], // an array of strings of rules
        ruleSpan = document.querySelector(".rules>div"),
        counter = -1,
        selectedBoxes,
        hintBoxes,
        markedBox,
        markedBoxes,
        markedPass,
        unmarkedBoxes,
        unmarkedPass,
        success;

    // both functions set up the first page of the game
    setRules();
    tutorial();

    /**
     * Push the function calls unto funcArray.
     * This will call the next levels sequentially
     * when the next level button is clicked.
     */
    funcArray.push(levelOne, levelTwo);

    // click events call functions to handle the click event
    $(".box").click(clickedBox);
    $(".colorBtn").click(changeColor);
    $(".levelBtn").click(clearGrid);
    $(".rules>button").click(nextStep);

    /**
     * This pushes rules in sequential order unto
     * the rules array.
     */
    function setRules() {

        rules.push("A plexiunit is made up of one or more plexiblocks.");
        rules.push("You can \"block\" (grey) or \"mark\" (red) a plexiblock by clicking it. Use the buttons below to designate mark or block action. Click a marked/blocked plexiblock again to remove mark/block.");
        rules.push("The amount of numbers next to the rows and columns are hints to how many plexiunits are in the row/column. The actual numbers represent how many plexiblocks make up the plexiunit.");
        rules.push("Look at row-2, it says \"0\". This means there are NO plexiunits in this row. Go ahead and block the entire row.");
        rules.push("Now look at row-5, it says \"5\". This means there is ONE plexiunit made up of FIVE plexiblocks. Mark all 5 plexiblocks.");
        rules.push("The row hints are read from left-to-right and the column hints are read top-to-bottom. Plexiunits are laid out in the same format.");
        rules.push("Look at the 1st column, it says \"1\" & \"2\". This means there are TWO plexiunits. One is made up of ONE plexiblock and the other is made up of TWO plexiblocks.");
        rules.push("In the last step, you marked row-5 entirely. Because of that, we can now see where the 2-plexiunit is. Mark the plexiblock in row-4, column-1 to complete the plexiunit.");
        rules.push("Plexiunits cannot touch other plexiunits. That is why blocking is useful. Block row-3, column-1. Now you can see where the 1-plexiunit is located in column-1.")
        rules.push("Finish the puzzle on your own. When you have successfully marked all plexiunits, the \"next level\" button will turn green. Click on it to proceed. :-)");

    }

    /**
     * When a box is clicked, we either mark it
     * or block it. Or remove mark/block.
     * This is done by setting the appropriate class to
     * the box that is clicked. Styling of class done
     * is CSS file.
     * @param  {[mouse event]} box
     */
    function clickedBox(box) {

        if (btnPress == "mark") {
            $(box.target).toggleClass("red");
            $(box.target).removeClass("grey");
        }

        if (btnPress == "block") {
            $(box.target).toggleClass("grey");
            $(box.target).removeClass("red");
        }
        // after a box is selected, we check to see if the
        // puzzle is solved by calling gridComplete()
        gridComplete();
    }

    /**
     * In the game, there are two buttons
     * for mark or block. Depending on which
     * is selected, btnPress changes accordingly.
     * Then the CSS is applied by calling clickedBox()
     * @param  {[mouse event]} btn
     */
    function changeColor(btn) { btnPress = btn.target.innerHTML; }

    /**
     * When the next button is clicked,
     * pop the next rule off of the array and
     * display it in the rules div. Once all
     * rules have been displayed, hide next button.
     */
    function nextStep(btn) {

        if (btn.target.className == "next") {
            counter++;
        }

        if (btn.target.className == "previous") {
            counter--;
        }

        if (counter < 1) {
            document.querySelector(".previous").style.visibility = "hidden";
        }
        else {
            document.querySelector(".previous").style.visibility = "visible";
        }

        if (counter > 8 ) {
            document.querySelector(".next").style.visibility = "hidden";
        }
        else {
            document.querySelector(".next").style.visibility = "visible";
        }

        ruleSpan.innerHTML = rules[counter];

    }

    // This sets up the tutorial level
    function tutorial() {

        document.querySelector(".level>span").innerHTML = "tutorial";

        selectedBoxes = [11, 15, 33, 41, 45, 51, 52, 53, 54, 55];

        for (var i = 0; i < selectedBoxes.length; i++) {
            markedBox = document.getElementById(selectedBoxes[i]);
            markedBox.setAttribute("data-marked", "true");
        }

        // makes the next button in the tutorial visible
        document.querySelector(".rules").style.visibility = "visible";
        // set up numbered hints
        document.querySelector("#rh13>p").innerHTML = "1";
        document.querySelector("#rh12>p").innerHTML = "1";
        document.querySelector("#rh23>p").innerHTML = "0";
        document.querySelector("#rh33>p").innerHTML = "1";
        document.querySelector("#rh43>p").innerHTML = "1";
        document.querySelector("#rh42>p").innerHTML = "1";
        document.querySelector("#rh53>p").innerHTML = "5";
        document.querySelector("#ch11>p").innerHTML = "1";
        document.querySelector("#ch21>p").innerHTML = "2";
        document.querySelector("#ch12>p").innerHTML = "1";
        document.querySelector("#ch13>p").innerHTML = "1";
        document.querySelector("#ch23>p").innerHTML = "1";
        document.querySelector("#ch14>p").innerHTML = "1";
        document.querySelector("#ch15>p").innerHTML = "1";
        document.querySelector("#ch15>p").innerHTML = "1";
        document.querySelector("#ch25>p").innerHTML = "2";

    }

    // This sets up the level one
    function levelOne() {

        document.querySelector(".level>span").innerHTML = "level 1";

        selectedBoxes = [11, 12, 14, 15, 21, 24, 32, 33, 34, 42, 45, 51, 52, 54, 55];

        for (var i = 0; i < selectedBoxes.length; i++) {
            markedBox = document.getElementById(selectedBoxes[i]);
            markedBox.setAttribute("data-marked", "true");
        }
        // set up numbered hints
        document.querySelector("#rh13>p").innerHTML = "2";
        document.querySelector("#rh12>p").innerHTML = "2";
        document.querySelector("#rh23>p").innerHTML = "1";
        document.querySelector("#rh22>p").innerHTML = "1";
        document.querySelector("#rh33>p").innerHTML = "3";
        document.querySelector("#rh43>p").innerHTML = "1";
        document.querySelector("#rh42>p").innerHTML = "1";
        document.querySelector("#rh53>p").innerHTML = "2";
        document.querySelector("#rh52>p").innerHTML = "2";
        document.querySelector("#ch11>p").innerHTML = "2";
        document.querySelector("#ch21>p").innerHTML = "1";
        document.querySelector("#ch12>p").innerHTML = "1";
        document.querySelector("#ch22>p").innerHTML = "3";
        document.querySelector("#ch13>p").innerHTML = "1";
        document.querySelector("#ch14>p").innerHTML = "3";
        document.querySelector("#ch24>p").innerHTML = "1";
        document.querySelector("#ch15>p").innerHTML = "1";
        document.querySelector("#ch25>p").innerHTML = "2";

    }

    // This sets up the level two
    function levelTwo() {

        document.querySelector(".level>span").innerHTML = "level 2";

        selectedBoxes = [14, 15, 22, 23, 24, 41, 42, 43, 44, 45, 53];

        for (var i = 0; i < selectedBoxes.length; i++) {
            markedBox = document.getElementById(selectedBoxes[i]);
            markedBox.setAttribute("data-marked", "true");
        }
        // set up numbered hints
        document.querySelector("#rh13>p").innerHTML = "2";
        document.querySelector("#rh23>p").innerHTML = "3";
        document.querySelector("#rh33>p").innerHTML = "0";
        document.querySelector("#rh43>p").innerHTML = "5";
        document.querySelector("#rh53>p").innerHTML = "1";
        document.querySelector("#ch11>p").innerHTML = "1";
        document.querySelector("#ch12>p").innerHTML = "1";
        document.querySelector("#ch22>p").innerHTML = "1";
        document.querySelector("#ch13>p").innerHTML = "1";
        document.querySelector("#ch23>p").innerHTML = "2";
        document.querySelector("#ch14>p").innerHTML = "2";
        document.querySelector("#ch24>p").innerHTML = "1";
        document.querySelector("#ch15>p").innerHTML = "1";
        document.querySelector("#ch25>p").innerHTML = "1";

    }

    /**
     * Checks to see if the puzzle is complete.
     * If it is complete, enable the next level button.
     */
    function gridComplete() {
        // collect all marked and unmarked boxes
        markedBoxes = document.querySelectorAll('[data-marked="true"]'),
        unmarkedBoxes = document.querySelectorAll('[data-marked="false"]'),
        success = false;
        // if every marked box has a class red, then return true
        markedPass = Array.prototype.every.call(markedBoxes, function(el) {
            return (el.className.includes("red") == true);
        });
        // if every unmarked box does not have a class red, then return true
        unmarkedPass = Array.prototype.every.call(unmarkedBoxes, function(el) {
            return (el.className.includes("red") == false);
        });
        // if both functions above return true, the puzzle is complete
        if (markedPass && unmarkedPass) {
            success = true;
            $(".levelBtn").addClass("complete");
            document.querySelector(".levelBtn").disabled = false;
        }
        // else it is false
        if (success == false) {
            $(".levelBtn").removeClass("complete");
            document.querySelector(".levelBtn").disabled = true;
        }

    }

    /**
     * Clears the entire grid for the next level
     */
    function clearGrid() {

        selectedBoxes = document.querySelectorAll(".box");
        hintBoxes = document.querySelectorAll("p");

        Array.prototype.forEach.call(selectedBoxes, function(el) {
            $(el).removeClass("red grey");
            el.setAttribute("data-marked", "false");
        });

        Array.prototype.forEach.call(hintBoxes, function(el) {
            el.innerHTML = "";
        });

        document.querySelector(".previous").style.visibility = "hidden";
        document.querySelector(".next").style.visibility = "hidden";
        document.querySelector(".rules").style.visibility = "hidden";
        document.querySelector(".level>span").innerHTML = "";
        $(".levelBtn").removeClass("complete");
        document.querySelector(".levelBtn").disabled = true;

        if (funcArray.length > 0) {
            funcArray.shift()();
        } else {
            document.querySelector(".level>span").innerHTML = "end of game";
            document.querySelector(".level>span").style.color = "#e50000";
        }

    }

});
