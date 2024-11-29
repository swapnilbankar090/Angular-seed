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
exports.Hostler = void 0;
var Student_1 = require("./Student");
var Hostler = /** @class */ (function (_super) {
    __extends(Hostler, _super);
    function Hostler(rollno, sname, marks, hostelname, roomNumber) {
        var _this = _super.call(this, rollno, sname, marks) || this;
        _this.hostelName = hostelname;
        _this.roomNumber = roomNumber;
        return _this;
    }
    Hostler.prototype.displayData = function () {
        _super.prototype.displayData.call(this);
        console.log("Hostel Name: ".concat(this.hostelName));
        console.log("Room Number: ".concat(this.roomNumber));
    };
    return Hostler;
}(Student_1.Student));
exports.Hostler = Hostler;
