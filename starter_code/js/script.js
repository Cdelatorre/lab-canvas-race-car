document.addEventListener('DOMContentLoaded', function() {
  var game = new Game('main-canvas');
  
  document.getElementById("start-button").onclick = function() {
    game.start();
  };
});
