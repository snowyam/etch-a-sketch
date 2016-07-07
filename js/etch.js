$(document).ready(function() {
  createGrid();

  $('#clr').on('click', clearGrid);
  $('#create').on('click', createGrid);
  colorSquare();
});

function clearGrid() {
  $('.square').unbind();
  $('.square').remove();
}

function resizeGrid(number) {
  for (var i = 0; i < number; i++) {
    for (var j = 0; j < number; j++) {
      $('.pad').append('<div class="square"></div>');
    }
  }
  var length = 800.00 / number;
  $('.square').css('width', length);
  $('.square').css('height', length);
}

function createGrid() {
  var number = document.getElementById("grid").value;

  if (isNaN(number)) {
    alert("Grid value is not a number. Defaulted: 16.");
    clearGrid();
    resizeGrid(16);
    colorSquare();
  } else {
    clearGrid();
    resizeGrid(number);
    colorSquare();
  }
}

function colorSquare() {
  $('.square').on('mouseenter', function() { 
    if ($(this).css('background-color') === "rgb(255, 255, 255)") {
      $(this).css('background-color', randomColor());
      $(this).css('opacity');
    } else {
      $(this).css('opacity', '-=0.1');
    }
  });
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  return rgb;
}