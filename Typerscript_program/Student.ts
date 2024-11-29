export class Student{
    private rollno:number
    private sname:string
    private marks:number

    constructor(){
        this.rollno=1
        this.sname="RAM";
        this.marks=90
    }
    // constructor(rollno:number,sname:string,marks:number){
    //     this.rollno=rollno
    //     this.sname=sname
    //     this.marks=marks   
    // }
    public displayData():void{
        console.log("Roll No: ",this.rollno)
        console.log("Student Name: ",this.sname)
        console.log("Student Marks: ",this.marks)
    }
}