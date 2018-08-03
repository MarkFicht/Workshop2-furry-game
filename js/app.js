document.addEventListener('DOMContentLoaded', function () {
    // console.log('Webpack work. Hi');

    var Game = require('./game.js');
    console.log( module );

    var start = new Game();

    start.showFurry();
    start.showCoin();

    start.startGame();

});


