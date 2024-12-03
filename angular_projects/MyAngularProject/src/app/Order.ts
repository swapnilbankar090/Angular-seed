export class Order{
    orderId:number
    orderDate:Date
    orderStatus:string
    deliveryCountry:string
    orderFrom:string

    constructor(orderId:number=0,orderDate:Date=new Date(),orderStatus:string="",deliveryCountry:string="",orderFrom:string=""){
        this.orderId = orderId
        this.orderDate = orderDate
        this.orderStatus = orderStatus
        this.deliveryCountry = deliveryCountry
        this.orderFrom = orderFrom
    }
}