import { numberOfLevel } from "./level.js";

// import Symbol from "./level";
// numberOfLevel.Symbol = Symbol;
// console.log(Symbol);


let currentLevel = document.querySelector('.area-level-text-game');
let levelForGame = document.querySelector('.levelForGame');

// currentLevel.textContent = 'Первый уровень';
// levelForGame.textContent = numberOfLevel;

// currentLevel.innerHTML = 'Первый уровень';
// levelForGame.innerHTML = numberOfLevel;

// console.log(numberOfLevel);

 if (numberOfLevel == 1) {    
    currentLevel.textContent = 'Первый уровень';
    levelForGame.textContent = numberOfLevel;
} else if (numberOfLevel == 2) {    
    levelForGame.innerHTML = numberOfLevel;
    currentLevel.innerHTML = 'Второй уровень';
} else if (numberOfLevel == 3) {   
    levelForGame.innerHTML = numberOfLevel;
    currentLevel.textContent = 'Третий уровень';
}