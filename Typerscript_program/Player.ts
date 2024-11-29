export class Player{
    private name: string;
    private jsno:number
    private country:string

    constructor(name:string, jsno:number, country:string){
        this.name = name;
        this.jsno = jsno;
        this.country = country;
    }

    public displaydata(){
        console.log("Player Name: "+this.name);
        console.log("Player JSNO: "+this.jsno);
        console.log("Player Country name: "+this.country);
        
    }
}