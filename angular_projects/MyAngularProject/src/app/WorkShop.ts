export class WorkShop{
    name:string
    technology:string
    fees:number
    pendingFees:number
    duration:number

    constructor(name:string="",technology:string="",fees:number=0,pendingFees:number=0,duration:number=0){
        this.name = name
        this.technology = technology
        this.fees = fees
        this.pendingFees = pendingFees
        this.duration = duration
    }
}