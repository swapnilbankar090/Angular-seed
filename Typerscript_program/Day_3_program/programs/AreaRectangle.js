"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaRectangle = void 0;
var AreaRectangle = /** @class */ (function () {
    function AreaRectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    AreaRectangle.prototype.print = function () {
        console.log("Rectangle with length ".concat(this.length, " and width ").concat(this.width, " ") + "has an area of ".concat(this.area()));
    };
    AreaRectangle.prototype.area = function () {
        return this.length * this.width;
    };
    return AreaRectangle;
}());
exports.AreaRectangle = AreaRectangle;
var rectangle = new AreaRectangle(4, 8);
rectangle.print();
