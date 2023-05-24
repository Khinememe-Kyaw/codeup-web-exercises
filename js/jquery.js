"use strict";

$(document).ready(function() {
    var codeOrder=["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
    var codeIndex=0;

    $(document).on("keydown", function(event) {
        var key=event.key;
        console.log(event.key);
        if(key=== codeOrder[codeIndex]) {
            codeIndex++;
            if (codeIndex === codeOrder.length) {
                alert("You have added 30 lives!");
                // codeIndex = 0;
            }
        }else{
            codeIndex=0;
        }

    });
})
