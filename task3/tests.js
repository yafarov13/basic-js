"use strict";
class Test {
    constructor(question, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.wrongAnswer1 = wrongAnswer1;
        this.wrongAnswer2 = wrongAnswer2;
        this.wrongAnswer3 = wrongAnswer3;
    }
}

let test1 = new Test('Сколько букв в слове "привет":', 'Шесть', 'Пять', 'Семь', 'Куда я попал?');

let test2 = new Test('Первая буква С в аббревиатуре СССР означает:', 'Союз', 'Советских', 'Социалистических', 'Республик');

let test3 = new Test('2+2=...', '4', '5', '1984', 'меньше 4');

let test4 = new Test('Столица Великобритании', 'Лондон', 'Манчестер', 'Ливерпуль', 'Саранск');

let test5 = new Test('Отчество Д.И.Менделеева', 'Иванович', 'Антонович', 'Олегович', 'Дмитриевич');


let testList = [test1, test2, test3, test4, test5];
