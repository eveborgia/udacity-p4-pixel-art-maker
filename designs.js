let colorPicker;
let height;
let width;
let chosenHex;

// Select color and size input
colorPicker = $("#colorPicker");
height = $("#inputHeight");
width = $("#inputWeight");

// When size is submitted by the user, call makeGrid()
const self = this;

function makeGrid(height, width) {

    let innerTableHTML ="";
    let tdHTML = "" ;

    for(let i = 0; i < width; i++) {
        tdHTML =  tdHTML + "<td></td>";
    };

    for(let i = 0; i < height; i++) {
        innerTableHTML = innerTableHTML + "<tr>" + tdHTML + "</tr>";
    };

    return document.getElementById("pixelCanvas").innerHTML = innerTableHTML;
};

$("#sizePicker").submit(function(event) {
    event.preventDefault();
    self.makeGrid(height.val(), width.val());
});

//Pick the color
$("#colorPicker").on("change", function() {
    chosenHex = $("#colorPicker").val();
});

//Color background with chosen color
$("#pixelCanvas").on("click", "td", function() {
    $( this ).css("background-color", chosenHex);
});
