let game = {
    /**
     * Запускает игру.
     */
    run() {
        console.clear();
        let counterCorrectAnswers = 0;
        shuffle(testList);
        for (let i=0; i < testList.length; i++) {
            console.log(testList[i].question);
            let checkVar = getAnswers(testList[i]);
            if (checkVar == 0) {
                return console.log(`Игра окончена. Вы не стали миллионером! Количество правильных ответов: ${counterCorrectAnswers}`);
            } else {
                counterCorrectAnswers += checkVar;
            }
            console.clear();
        }
        if (counterCorrectAnswers == 5) {
            console.log("Поздравляю, вы победили! Теперь вы миллионер!");
        }
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log('Добро пожаловать в игру «Кто хочет стать миллионером?»');
        // Отображаем нашу игру.
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();

