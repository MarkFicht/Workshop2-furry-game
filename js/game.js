
var Coin = require('./coin.js');
var Furry = require('./furry.js');

//--- /Mecha. of game/ ---//
function Game() {
    this.board = document.getElementById('board').querySelectorAll('div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;

    var self = this;


    //--- index board
    this.index = function (x, y) {
        return x + (y * 10);        // x: 0-9 right, y: 0-9 down.
    };


    //--- show points(furry & coin) on board
    this.showFurry = function () {
        if (this.board[ this.index(this.furry.x, this.furry.y) ] !== undefined) {

            this.board[ this.index(this.furry.x, this.furry.y) ].classList.add('furry');
        }
    };
    this.showCoin = function () {
        this.board[ this.index(this.coin.x, this.coin.y) ].classList.add('coin');
    };


    //--- hide furry on board
    this.hideVisibleFurry = function () {
        // document.querySelector('.furry').removeAttribute('class');
        var hideFurry = document.querySelector('.furry');

        if (hideFurry !== null) {
            hideFurry.classList.remove('furry');
        }
    };


    //--- hide coin on board, for new game
    this.hideVisibleConin = function () {
        var hideConin = document.querySelector('.coin');

        if (hideConin !== null) {
            hideConin.classList.remove('coin');
        }
    };


    //--- furry direction and interactions
    this.moveFurry = function () {
        this.hideVisibleFurry();

        if (this.furry.direction === 'right') {
            this.furry.x = this.furry.x + 1;
        }
        else if (this.furry.direction === 'left'){
            this.furry.x = this.furry.x - 1;
        }
        else if (this.furry.direction === 'down'){
            this.furry.y = this.furry.y + 1;
        }
        else if (this.furry.direction === 'up') {
            this.furry.y = this.furry.y - 1;
        }

        this.showFurry();
        this.checkCoinCollision();
        this.gameOver();
    };


    //--- keyboard moving
    this.turnFurry = function (e) {

        switch (e.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        }};

    document.addEventListener('keydown', function (event) {
        self.turnFurry(event);
    });


    //--- check collision
    this.checkCoinCollision = function () {
        if ((this.furry.x === this.coin.x) && (this.furry.y === this.coin.y)) {

            this.hideVisibleConin();

            this.score++;
            document.querySelector('#score strong').innerHTML = this.score;

            this.coin = new Coin();
            this.showCoin();
        }
    };


    //--- GAME OVER
    this.gameOver = function () {
        if (this.furry.x < 0 ||
            this.furry.x > 9 ||
            this.furry.y < 0 ||
            this.furry.y > 9) {

            clearInterval(this.idSetInterval);

            this.hideVisibleFurry();

            document.querySelector('#score strong').innerHTML = this.score;
            document.querySelector('#over').classList.remove('invisible');
        }
    };


    //--- Prepare new board
    this.prepareNewBoard = function () {

        if ( document.querySelector('#over').className === 'invisible' )  {
            return null;
        }

        this.hideVisibleConin();

        document.querySelector('#score strong').innerHTML = this.score;     // Display correct points, from 0
        document.querySelector('#over').classList.add('invisible');
    };


    //--- interval game
    this.startGame = function () {
        this.idSetInterval = setInterval(function () {

            self.moveFurry();

        }, 250);
    };

};

module.exports = Game;