"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Batsman = void 0;
var Player_1 = require("./Player");
var Batsman = /** @class */ (function (_super) {
    __extends(Batsman, _super);
    function Batsman(name, jsno, country, noofrun, isLeft) {
        var _this = _super.call(this, name, jsno, country) || this;
        _this.noofrun = noofrun;
        _this.isLeft = isLeft;
        return _this;
    }
    Batsman.prototype.displaydata = function () {
        _super.prototype.displaydata.call(this);
        console.log("No of runs: ".concat(this.noofrun));
        console.log("Is Left Handed: ".concat(this.isLeft));
    };
    return Batsman;
}(Player_1.Player));
exports.Batsman = Batsman;
