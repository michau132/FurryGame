/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


const Game = __webpack_require__(1);
let game = new Game();
game.showFurry();
game.showCoin();
game.startGame();





/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


const Furry = __webpack_require__(2);
const Coin = __webpack_require__(3);

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



/***/ }),
/* 2 */
/***/ (function(module, exports) {

const Furry = function () {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
};
module.exports = Furry;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

const Coin = function () {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);

};

module.exports = Coin;

/***/ })
/******/ ]);