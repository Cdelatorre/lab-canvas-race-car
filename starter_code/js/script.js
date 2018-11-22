document.addEventListener('DOMContentLoaded', function() {
  $('#final-score').hide()
  var game = new Game('main-canvas');
  
  document.getElementById("start-button").onclick = function() {
    game.start();
  };
});
