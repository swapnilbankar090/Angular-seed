//create class Book with data members
// bookname ,price, authorname, ISBN 
// constructor with args, getter,setter, displayBookdetails();

export class Book {

    private bookname: string
    private price: number
    private authorname: string
    private ISBN: string


    constructor(bookname, price, authorname, ISBN) {
        this.bookname = bookname;
        this.price = price;
        this.authorname = authorname;
        this.ISBN = ISBN;
    }

    //getter setter
    get Bookname(): string {
        return this.bookname;
    }
    set BookName(value: string) {
        this.bookname = value;
    }
    get Price(): number {
        return this.price;
    }
    set Price(value: number) {
        this.price = value;
    }
    get Authorname(): string {
        return this.authorname;
    }
    set Authorname(value: string) {
        this.authorname = value;
    }
    get I_SBN(): string {
        return this.ISBN;
    }
    set I_SBN(value: string) {
        this.ISBN = value;
    }
    //display book details
    displayBookdetails(): void {
        console.log(`Book Name: ${this.bookname}`
            + `\nPrice: ${this.price}`
            + `\nAuthor Name: ${this.authorname}`
            + `\nISBN: ${this.ISBN}`
        );
    }

}