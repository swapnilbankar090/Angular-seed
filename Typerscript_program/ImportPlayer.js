"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Batsman_1 = require("./Batsman");
var Blower_1 = require("./Blower");
var bats = new Batsman_1.Batsman("yash", 22, "india", 45009, true);
bats.displaydata();
var bowl = new Blower_1.Blower("jadeja", 8, "india", 300);
bowl.displaydata();
