let books = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
];

function findBookById(id) {
    return books.find(book => book[0] === id);
}

function findBookByTitle(title) {
    return books.find(book => book[1].toLowerCase() === title.toLowerCase());
}

function findBookByAuthor(author) {
    return books.find(book => book[2].toLowerCase() === author.toLowerCase());
}

function addBook(id, title, author, price, quantity) {
    let book = [id, title, author, price, quantity];
    books.push(book);
}

function editBook(id, newTitle, newAuthor, newPrice, newQuantity) {
    let book = findBookById(id);
    if (book) {
        book[1] = newTitle;
        book[2] = newAuthor;
        book[3] = newPrice;
        book[4] = newQuantity;
    }
}

function deleteBook(id) {
    books = books.filter(book => book[0] !== id);
}

function sellBook(title, quantity, balance) {
    let book = findBookByTitle(title);
    if (!book) {
        console.log("الكتاب غير موجود.");
        return;
    }
    if (book[4] < quantity) {
        console.log("الكمية غير كافية.");
        return;
    }
    if (balance < book[3] * quantity) {
        console.log("الرصيد غير كافي لشراء الكتاب.");
        return;
    }
    book[4] -= quantity;  // نقص كمية الكتب من المخزون
    let bill = book[3] * quantity;  // حساب الفاتورة
    console.log(`تم بيع الكتاب بنجاح. قيمة الفاتورة: ${bill}`);
}
