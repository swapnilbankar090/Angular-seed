"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaCircle = void 0;
var AreaCircle = /** @class */ (function () {
    function AreaCircle(radius) {
        this.radius = radius;
    }
    AreaCircle.prototype.print = function () {
        console.log("Circle with radius ".concat(this.radius, " ") + "has an area of ".concat(this.area()));
    };
    AreaCircle.prototype.area = function () {
        return 3.14 * this.radius * this.radius;
    };
    return AreaCircle;
}());
exports.AreaCircle = AreaCircle;
var circle = new AreaCircle(2);
circle.print();
