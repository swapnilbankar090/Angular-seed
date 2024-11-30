"use strict";
//create class Book with data members
// bookname ,price, authorname, ISBN 
// constructor with args, getter,setter, displayBookdetails();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(bookname, price, authorname, ISBN) {
        this.bookname = bookname;
        this.price = price;
        this.authorname = authorname;
        this.ISBN = ISBN;
    }
    Object.defineProperty(Book.prototype, "Bookname", {
        //getter setter
        get: function () {
            return this.bookname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "BookName", {
        set: function (value) {
            this.bookname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "Price", {
        get: function () {
            return this.price;
        },
        set: function (value) {
            this.price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "Authorname", {
        get: function () {
            return this.authorname;
        },
        set: function (value) {
            this.authorname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "I_SBN", {
        get: function () {
            return this.ISBN;
        },
        set: function (value) {
            this.ISBN = value;
        },
        enumerable: false,
        configurable: true
    });
    //display book details
    Book.prototype.displayBookdetails = function () {
        console.log("Book Name: ".concat(this.bookname)
            + "\nPrice: ".concat(this.price)
            + "\nAuthor Name: ".concat(this.authorname)
            + "\nISBN: ".concat(this.ISBN));
    };
    return Book;
}());
exports.Book = Book;
