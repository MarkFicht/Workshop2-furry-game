!function(r){var t={};function i(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=r,i.c=t,i.d=function(r,t,e){i.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},i.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,t){if(1&t&&(r=i(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var n in r)i.d(e,n,function(t){return r[t]}.bind(null,n));return e},i.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return i.d(t,"a",t),t},i.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},i.p="",i(i.s=0)}([function(r,t,i){document.addEventListener("DOMContentLoaded",function(){var r=i(1),t=new r,e=function(r){r.prepareNewBoard(),r.showFurry(),r.showCoin(),r.startGame()};e(t),document.querySelector("#over button").addEventListener("click",function(){t=new r,e(t)})})},function(r,t,i){var e=i(2),n=i(3);r.exports=function(){this.board=document.getElementById("board").querySelectorAll("div"),this.furry=new n,this.coin=new e,this.score=0;var r=this;this.index=function(r,t){return r+10*t},this.showFurry=function(){void 0!==this.board[this.index(this.furry.x,this.furry.y)]&&this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")},this.hideVisibleFurry=function(){var r=document.querySelector(".furry");null!==r&&r.classList.remove("furry")},this.hideVisibleConin=function(){var r=document.querySelector(".coin");null!==r&&r.classList.remove("coin")},this.moveFurry=function(){this.hideVisibleFurry(),"right"===this.furry.direction?this.furry.x=this.furry.x+1:"left"===this.furry.direction?this.furry.x=this.furry.x-1:"down"===this.furry.direction?this.furry.y=this.furry.y+1:"up"===this.furry.direction&&(this.furry.y=this.furry.y-1),this.showFurry(),this.checkCoinCollision(),this.gameOver()},this.turnFurry=function(r){switch(r.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="up";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="down"}},document.addEventListener("keydown",function(t){r.turnFurry(t)}),this.checkCoinCollision=function(){this.furry.x===this.coin.x&&this.furry.y===this.coin.y&&(this.hideVisibleConin(),this.score++,document.querySelector("#score strong").innerHTML=this.score,this.coin=new e,this.showCoin())},this.gameOver=function(){(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9)&&(clearInterval(this.idSetInterval),this.hideVisibleFurry(),document.querySelector("#score strong").innerHTML=this.score,document.querySelector("#over").classList.remove("invisible"))},this.prepareNewBoard=function(){if("invisible"===document.querySelector("#over").className)return null;this.hideVisibleConin(),document.querySelector("#score strong").innerHTML=this.score,document.querySelector("#over").classList.add("invisible")},this.startGame=function(){this.idSetInterval=setInterval(function(){r.moveFurry()},250)}}},function(r,t){r.exports=function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}},function(r,t){r.exports=function(){this.x=0,this.y=0,this.direction="right"}}]);