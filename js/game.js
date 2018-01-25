
const Furry = require('./furry.js');
const Coin = require('./coin.js');

const Game = function () {
    this.board = document.querySelector('#board').children;
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    self = this;
    this.startGame = function () {
        this.idSetInterval = setInterval(function () {
            self.moveFurry();
        }, 250);
    }



};

Game.prototype.index = function (x, y) {
    return x + (y * 10);
};

Game.prototype.showFurry = function () {
    this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
};


Game.prototype.showCoin = function () {
    this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
};

Game.prototype.moveFurry = function () {
    this.hideVisibleFurry ();
    if(this.furry.direction === "right") {
        this.furry.x = this.furry.x + 1;
    } else if (this.furry.direction === "down") {
        this.furry.y = this.furry.y + 1;
    } else if (this.furry.direction === "left") {
        this.furry.x = this.furry.x - 1;
    } else if (this.furry.direction === "up") {
        this.furry.y = this.furry.y - 1;
    }
    this.gameOver();
    this.showFurry();
    this.checkCoinCollision();


};
Game.prototype.hideVisibleFurry = function () {
    const visible = document.querySelector('.furry');
    visible.classList.remove('furry');
};
Game.prototype.furryDirection = function (event) {
    switch (event.which) {
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
    }
} ;

document.addEventListener('keydown', function(event) {
    self.furryDirection(event);
});

Game.prototype.checkCoinCollision = function () {
    if (this.furry.x == this.coin.x && this.furry.y == this.coin.y) {
        var positionCoin = document.querySelector('.coin');
        positionCoin.classList.remove('coin');
        const score = document.querySelector('strong');
        score.innerText = parseInt(score.innerText) +1;
        this.coin = new Coin();
        this.showCoin();

    }
};

Game.prototype.gameOver = function () {
    if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
        clearInterval(this.idSetInterval);
        const over = document.getElementById('over');
        over.classList.remove('invisible');
        const score = document.querySelector('.endScore');
        const strong = document.querySelector('strong')
        score.innerText=strong.innerText;
        this.hideVisibleFurry();
    }

}
module.exports = Game;

