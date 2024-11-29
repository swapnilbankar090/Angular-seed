import { Player } from "./Player"

export class Batsman extends Player {
    private noofrun: number
    private isLeft: boolean

    constructor(name: string, jsno: number, country: string, noofrun: number, isLeft: boolean) {
        super(name, jsno, country);
        this.noofrun = noofrun;
        this.isLeft = isLeft;
    }

    public displaydata(): void {
        super.displaydata()
        console.log(`No of runs: ${this.noofrun}`)
        console.log(`Is Left Handed: ${this.isLeft}`)

    }

}