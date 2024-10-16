import { books, Book } from "./entities";

class BookManager {
    addBook(book: Book) {
        books.push(book);
        console.log(`Книга '${book.name}' добавлена.`);
    }

    remove(name: string) {
        const index = books.findIndex((book) => book.name === name);
        if (index !== -1) {
            books.splice(index, 1);
            console.log(`Книга '${name}' удалена.`);
        } else {
            console.log(`Книга с названием '${name}' не найдена.`);
        }
    }

    findBookByName(name: string) {
        const foundBook = books.find((book) => book.name === name);

        if (foundBook) {
            console.log(`Книга '${name}' найдена:`);
            console.log(`Автор: ${foundBook.author}`);
            console.log(`Год издания: ${foundBook.year}`);
            console.log(`Количество страниц: ${foundBook.pageCount}`);
        } else {
            console.log(`Книга с названием '${name}' не найдена.`);
        }
    }
}

export default BookManager;
