import { CalculateArea, Printable } from "./Interface";

export class AreaRectangle implements Printable, CalculateArea {
    private length: number;
    private width: number;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }
    print(): void {
        console.log(`Rectangle with length ${this.length} and width ${this.width} ` + `has an area of ${this.area()}`);
    }
    area(): number {
        return this.length * this.width;
    }
}
const rectangle= new AreaRectangle(4,8)
rectangle.print()