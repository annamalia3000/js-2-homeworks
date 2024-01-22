function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = [] 
};

const newStudent1 = new Student('Олег', 'мужской', 19);
const newStudent2 = new Student('Артём', 'мужской', 25);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
    } else {
        return 0;
    };
}

Student.prototype.getAverage = function () {
    if(!this.hasOwnProperty('marks') || this.marks.length == 0) {
        return 0;
    } else {
        let sum = this.marks.reduce((accumulator, mark) => accumulator + mark, 0);
        return sum / this.marks.length;
    };
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

newStudent2.exclude('illness');

newStudent1.marks = [5, 5, 4, 4]
newStudent1.addMarks();
newStudent1.getAverage();
newStudent1.setSubject('Biology');
