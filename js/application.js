// Wait till the browser is ready to render the game (avoids glitches)
var game;
window.requestAnimationFrame(function () {
    game = new GameManager(6, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
