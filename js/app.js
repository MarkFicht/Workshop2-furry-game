console.log('Webpack work. Hi');

//-------------------- /Definition/ --------------------//
//--- /Player/ ---//
function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

//--- /Point/ ---//
function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

//--- /Mecha. of game/ ---//
function Game() {
    this.board = document.getElementById('board').querySelectorAll('div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;

    this.index = function (x, y) {
        return x + (y * 10); // x: 0-9 right, y: 0-9 down.
    }

    //--- show points on board
    this.showFurry = function () {
        this.board[ this.index(this.furry.x, this.furry.y) ].classList.add('furry');
    }

    this.showCoin = function () {
        this.board[ this.index(this.coin.x, this.coin.y) ].classList.add('coin');
    }
}

//-------------------- /call out/ --------------------//
var start = new Game();
start.showFurry();
start.showCoin();