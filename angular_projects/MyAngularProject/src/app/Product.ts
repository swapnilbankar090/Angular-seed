export class Product{
    prodId:number
    prodName:string
    price:number

    constructor(prodId:number,prodName:string,price:number)
    {
        this.prodId = prodId
        this.prodName = prodName
        this.price = price
    }

    public displayData():string
    {
        return "Product [prodId="+this.prodId+", prodName="+this.prodName+", price="+this.price+"]"
    }
}