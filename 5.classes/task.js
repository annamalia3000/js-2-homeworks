class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.state = 100,
        this.type = null
    }

    fix() {
        this.state *= 1.5;
    }

    set state(stateBook) {
        if (stateBook < 0) {
            this._state = 0;
        } else if (stateBook > 100) {
            this._state = 100;
        } else {
            this._state = stateBook;
        } 
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const findResult = this.books.find((iteam) => iteam[type] === value);
        return findResult || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if (!book) return null;
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        };

        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject]) {
            return 0;
        }

        const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);

        if(subjects.length === 0) {
            return 0;
        }

        const totalSum = subjects.reduce((acc, subject) => {
            return acc + this.getAverageBySubject(subject);
        }, 0);

        return totalSum / subjects.length;
    }


}
const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75

