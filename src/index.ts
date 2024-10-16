import BookManager from "./methods";

const bookManager = new BookManager();

bookManager.addBook({
    name: "Колобок",
    author: "Толстой Алексей Николаевич",
    year: 1965,
    pageCount: 8,
});
bookManager.addBook({
    name: "Сила настоящего",
    author: "Экхарт Толле",
    year: 1997,
    pageCount: 256,
});

bookManager.remove("Сила настоящего");
bookManager.findBookByName("Колобок");
