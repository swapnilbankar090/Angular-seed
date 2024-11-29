import { Player } from "./Player";

export  class Blower extends Player{
    private Wicketcounts:number

    constructor(name:string, jsno:number, country:string,Wicketcounts:number){
        super(name, jsno, country);
        this.Wicketcounts = Wicketcounts;
    
    }
   
    public displaydata(): void {
        super.displaydata();
        console.log(`Wicketcounts: ${this.Wicketcounts}`)
    
    }
}