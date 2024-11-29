"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name, jsno, country) {
        this.name = name;
        this.jsno = jsno;
        this.country = country;
    }
    Player.prototype.displaydata = function () {
        console.log("Player Name: " + this.name);
        console.log("Player JSNO: " + this.jsno);
        console.log("Player Country name: " + this.country);
    };
    return Player;
}());
exports.Player = Player;
