// Global variables
var width;
var height;
var color;

// Select color input
// Select size input
$('#pixel_canvas').on('click', 'td', function (e) {
  color = $('#colorPicker').val();
  $(e.target).css('background-color', color);
});
$('#submit_size').click(function(e) {
  e.preventDefault();
  width = $('#input_width').val();
  height = $('#input_height').val();
  makeGrid();
});
// When size is submitted by the user, call makeGrid()

function makeGrid() {
  $('#pixel_canvas').empty();
  for (var i = 0; i < height; ++i) {
    $('#pixel_canvas').append("<tr> </tr>");
  }
  for (var j = 0; j < width; ++j) {
    $('tr').append("<td></td>");
  }
}
