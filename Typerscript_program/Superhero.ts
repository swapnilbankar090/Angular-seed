export class Superhero {

    private superheroname: string
    private superheropower: string
    private origin: string
    private canFly: string

    constructor(superheroname: string, superheropower: string, origin: string, canFly: string) {
        this.superheroname = superheroname
        this.superheropower = superheropower
        this.origin = origin
        this.canFly = canFly

    }

    public displaydata() {
        console.log(`Superhero Name: ${this.superheroname}`)
        console.log(`Superhero Power: ${this.superheropower}`)
        console.log(`Origin: ${this.origin}`)
        console.log(`Can Fly: ${this.canFly}`)
    }

}