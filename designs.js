function makeGrid() {

	// Create necessary variables for components

	var canvas, gridHeight, gridWidth;

	canvas = $('#pixel_canvas');
	gridHeight = $('#inputHeight').val();
	gridWidth = $('#inputWidth').val();

// Loop over each row
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr>');
	}

  var rows;
	rows = $('tr');

	for (y = 0; y < gridWidth; y++) {
	rows.append('<td>');
	}

  var cell;
	cell = canvas.find('td');

	// Change color when colorPicker is clicked
	cell.click(function() {
		// Select color
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
}

// Call makeGrid() when submit button is clicked
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});
