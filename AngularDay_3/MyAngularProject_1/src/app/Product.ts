export class Product {
    pid: number;
    pname: string;
    price: number;

    // Constructor to initialize the Product object
    constructor(pid: number, pname: string, price: number) {
        this.pid = pid; // Fixed the typo (Pid to pid)
        this.pname = pname;
        this.price = price;
    }

    // Method to display product details
    public displayData(): string {
        return `Product ID: ${this.pid}, Product Name: ${this.pname}, Price: ${this.price}`;
    }

    public displaydata2 =()=>{
        return `Product ID: ${this.pid}, Product Name: ${this.pname}, Price:${this.price}`
    }
   
    
}