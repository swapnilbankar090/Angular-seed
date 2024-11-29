import { Student } from "./Student";

export class Hostler extends Student {
    private hostelName: string;
    private roomNumber: number;

    constructor(rollno: number, sname: string, marks: number, hostelname: string, roomNumber: number) {
        super(rollno, sname, marks);
        this.hostelName = hostelname;
        this.roomNumber = roomNumber
    }


    public displayData(): void {
        super.displayData();
        console.log(`Hostel Name: ${this.hostelName}`)
        console.log(`Room Number: ${this.roomNumber}`)

    }
} 