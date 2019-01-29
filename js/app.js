document.addEventListener('DOMContentLoaded', function () {
    // console.log('Webpack work. Hi');

    var Game = require('./game.js');
    // console.log( module );

    var start = new Game();

    //--- New game
    start.showFurry();
    start.showCoin();

    start.startGame();

    //--- Play again
    document.querySelector('#over button').addEventListener('click', function () {
        start = new Game();

        start.prepareNewBoard();

        start.showFurry();
        start.showCoin();

        start.startGame();

    });

});


