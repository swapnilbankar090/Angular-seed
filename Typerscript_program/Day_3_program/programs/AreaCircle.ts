import { CalculateArea, Printable } from "./Interface";

export class AreaCircle implements Printable, CalculateArea {

    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    
    print(): void {
        console.log(`Circle with radius ${this.radius} `+`has an area of ${this.area()}`);
    }
    area(): number {
        return 3.14 * this.radius * this.radius;
    }
}

const circle = new AreaCircle(2);
circle.print();




