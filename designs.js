var colorPicker;
var button;
var table;
var height;
var width;
var canvas;

var debug = true;

// Select color input
colorPicker = $("#colorPicker");

// Select size input
height = $("#inputHeight");
width = $("#inputWeight");

// When size is submitted by the user, call makeGrid()
var self = this;

function makeGrid(height, width) {

    var innerTableHTML ="";
    var tdHTML = "" ;

    for(var i = 0; i < width; i++){
        tdHTML =  tdHTML + "<td></td>";
    }

    for(var i = 0; i < height; i++){
        innerTableHTML = innerTableHTML + "<tr>" + tdHTML + "</tr>";
    }

    return document.getElementById("pixelCanvas").innerHTML = innerTableHTML;

}

$("#sizePicker").submit(function(event){
    event.preventDefault();
    self.makeGrid(height.val(), width.val());
});


