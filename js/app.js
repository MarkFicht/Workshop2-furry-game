document.addEventListener('DOMContentLoaded', function () {
    // console.log('Webpack work. Hi');

    var Game = require('./game.js');
    // console.log( module );

    var start = new Game();
    
    var newGame = function (obj) {
        obj.prepareNewBoard();

        obj.showFurry();
        obj.showCoin();

        obj.startGame();
    };

    //--- New game
    newGame(start);

    //--- Play again
    document.querySelector('#over button').addEventListener('click', function () {
        start = new Game();

        newGame(start);
    });

});


