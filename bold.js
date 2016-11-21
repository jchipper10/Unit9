var wordItems = document.getElementsByTagName("strong");
var i = 0;
var j = 0;

function mouseOver(bold) {
    "use strict";
    bold.onmouseover = function () {
        while (j < wordItems.length) {
            wordItems[j].style.color = "red";
            j = j + 1;
        }
    };
}

while (i < wordItems.length) {
    mouseOver(wordItems[i]);
    i = i + 1;
}

