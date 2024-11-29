"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Superhero = void 0;
var Superhero = /** @class */ (function () {
    function Superhero(superheroname, superheropower, origin, canFly) {
        this.superheroname = superheroname;
        this.superheropower = superheropower;
        this.origin = origin;
        this.canFly = canFly;
    }
    Superhero.prototype.displaydata = function () {
        console.log("Superhero Name: ".concat(this.superheroname));
        console.log("Superhero Power: ".concat(this.superheropower));
        console.log("Origin: ".concat(this.origin));
        console.log("Can Fly: ".concat(this.canFly));
    };
    return Superhero;
}());
exports.Superhero = Superhero;
