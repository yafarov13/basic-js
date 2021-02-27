/**
 * Функция принимает объект типа Test, создает массив из ответов, перемешивает и сравнивает ответ игрока с элементами массива ответов.
 * @param obj - принимает объект
 * @returns {number} - возвращает 0, если игрок вышел или неправильно ответил; возвращает 1, если игрок ответил правильно
 */
function getAnswers(obj) {
    let answers = [obj.correctAnswer, obj.wrongAnswer1, obj.wrongAnswer2, obj.wrongAnswer3];
    shuffle(answers);
    answers = getAnswersWithLetter(answers);
    for (let countAnswers = 0; countAnswers < answers.length; countAnswers++) {
        console.log(`${answers[countAnswers][0]}. ${answers[countAnswers][1]}`);
    }
    return compareAnswers(answers, obj);
}

/**
 * Принимает массив и перемешивает по алгоритму тасования Фишера—Йетса
 * @param array
 */
function shuffle(array) {
    for (let countI = array.length - 1; countI > 0; countI--) {
        let countJ = Math.floor(Math.random() * (countI + 1));
        [array[countI], array[countJ]] = [array[countJ], array[countI]];
    }
}

/**
 * Принимает массив и заменяет элементы на массивы, первым элементом которого будут буквы "a", "b" и т.д., а вторым элементом будут элементы исходного массива
 * @param array
 * @returns {(string|*)[][]}
 */
function getAnswersWithLetter(array) {
    return array = [["a", array[0]], ["b", array[1]], ["c", array[2]], ["d", array[3]]];
}

const availableAnswers = ["a", "b", "c", "d"];

/**
 * Сравнивает ответ пользователя с ответами записанными в объекте
 * @param array
 * @param obj
 * @returns {number}
 */
function compareAnswers(array, obj) {
    let userAnswer = prompt("Выберете правильный ответ. Введите a, b, c или d. Если хотите выйти из игры введите любой текст, кроме a, b, c или d");
    if (userAnswer === null) {
        return 0;
    }
    userAnswer = userAnswer.toLowerCase();
    if (!availableAnswers.includes(userAnswer)) {
        return 0;
    } else {
        for (let j=0; j < array.length; j++) {
            if (userAnswer == array[j][0]) {
                if (array[j][1] == obj.correctAnswer) {
                    console.log("Верно!")
                    return 1;
                } else {
                    console.log(`Неправильно. Верный ответ: ${obj.correctAnswer}`);
                    return 0;
                }
            }
        }

    }
}
