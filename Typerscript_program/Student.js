"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
        this.rollno = 1;
        this.sname = "RAM";
        this.marks = 90;
    }
    // constructor(rollno:number,sname:string,marks:number){
    //     this.rollno=rollno
    //     this.sname=sname
    //     this.marks=marks   
    // }
    Student.prototype.displayData = function () {
        console.log("Roll No: ", this.rollno);
        console.log("Student Name: ", this.sname);
        console.log("Student Marks: ", this.marks);
    };
    return Student;
}());
exports.Student = Student;
