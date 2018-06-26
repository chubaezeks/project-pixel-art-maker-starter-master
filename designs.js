// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
var gridHeight = $('#inputHeight').val();
var gridWidth = $('#inputWidth').val();

for (x=0; x <= gridHeight - 1; x++) {
  theGrid.append("<tr>");
for (y=0; y <= gridWidth; y++) {
  theGrid.append("<td>");
}
}
});
// Your code goes here!

}
