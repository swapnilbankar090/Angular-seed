export class Student{
    protected studName:string
    protected rollNo:number
    protected marks:number[]

    constructor(studName:string="",rollNo:number=0,marks:number[]=[]){
        this.studName=studName
        this.rollNo=rollNo
        this.marks=marks
    }

    public displayData():string{
        return "studName: "+this.studName+", rollNo: "+this.rollNo+", marks: "+this.marks
    }
}