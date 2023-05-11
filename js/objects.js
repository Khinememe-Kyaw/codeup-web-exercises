

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person={};
    person.firstName = "Khinememe";
    person.lastName = "Kyaw";

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    function sayHello(person){
        return (`Hello from ${person.firstName} ${person.lastName}`);
    }
    console.log(sayHello(person));

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    for(let i=0; i<shoppers.length; i++){
        if(shoppers[i].amount>200){
            console.log(`Shopper Name: `, shoppers[i].name);
            console.log('Amount before Discount: $', shoppers[i].amount);
            console.log(`Discount Received: $`, shoppers[i].amount *0.12);
            console.log(`Amount after Discount: $`, shoppers[i].amount -shoppers[i].amount*0.12);
        }else{
            console.log(`Shopper Name: `, shoppers[i].name);
            console.log('Amount: $', shoppers[i].amount);
        }
    }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    let books=[{
            title: "One Thing",
            author: {
                firstName: "Gary",
                lastName: "Keller"
        }},
        {
            title: "Finding Me",
            author: {
                firstName: "Viola",
                lastName: "Davis"
            }
        },
        {
            title: "Rich Dad and Poor Dad",
            author: {
                firstName: "Robert",
                lastName: "Kiyosaki"
            }
        },
        {
            title: "The Power of Letting Go",
            author: {
                firstName: "John",
                lastName: "Purkiss"
            }
        },
        {
            title: "The Mountain is You",
            author: {
                firstName: "Brianna",
                lastName: "Wiest"
            }
        },
    ]
    for(let i=0; i<books.length;i++ ){
        console.log(books[i].title);
        console.log(books[i].author.firstName);
        console.log(books[i].author.lastName);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, firstName, lastName){
        let result = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }
        books.push(result);
    }

    createBook("The Mountain is You", "Brianna","Wiest");

    function showBookInfo(book){
        return "Title: " + book.title + "\n" + "Author " + book.author.firstName + " " + book.author.lastName;
    }


    books.forEach(function(book,index){
        console.log("Book # " + (index + 1) + "\n" + showBookInfo(book))
    })


})();