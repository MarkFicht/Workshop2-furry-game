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


    //--- show points(furry & coin) on board
    this.showFurry = function () {
        this.board[ this.index(this.furry.x, this.furry.y) ].classList.add('furry');
    }
    this.showCoin = function () {
        this.board[ this.index(this.coin.x, this.coin.y) ].classList.add('coin');
    }


    //--- hide furry on board
    this.hideVisibleFurry = function () {
        // document.querySelector('.furry').removeAttribute('class');
        var hideFurry = document.querySelector('.furry');
        hideFurry.classList.remove('furry');

    }


    //--- trick with 'this.' :)
    var self = this;


    //--- furry direction
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
    }


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

            var coinPosition = document.querySelector('.coin');
            coinPosition.classList.remove('coin');

            this.score++;
            document.querySelector('#score strong').innerHTML = this.score;

            this.coin = new Coin();
            this.showCoin();
        }
    }


    //--- interval game
    this.startGame = function () {
        this.idSetIntercal = setInterval(function () {
            // console.log('text from setInterval.');

            self.moveFurry();

        }, 250);
    }
}

//-------------------- /call out/ --------------------//
var start = new Game();

start.showFurry();
start.showCoin();

start.startGame();

/*document.addEventListener('keydown', function (event) {
    start.turnFurry(event);
});*/
