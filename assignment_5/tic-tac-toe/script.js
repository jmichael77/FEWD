var selectCells = document.querySelectorAll('li');

for (var i = 0; i < selectCells.length; i++) {
  selectCells[i].addEventListener('click', function() {

  var cellContent = this;

  var player1 = cellContent.textContent = 'X';


  });
}

for (var i = 0; i < selectCells.length; i++) {
selectCells[i].addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    var cellContent = this;
    var player2 = cellContent.textContent = '0';
    return false;
}, false);
}