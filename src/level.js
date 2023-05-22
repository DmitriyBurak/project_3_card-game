let buttonLevel = document.querySelectorAll('.buttonLevel')
let level1 = document.querySelector('.level1')
let level2 = document.querySelector('.level2')
let level3 = document.querySelector('.level3')
let but0 = document.querySelector('.but0')
let but1 = document.querySelector('.but1')
// let warning = document.querySelector('.warning');
// let currentLevel = document.querySelector('.area-level-text-game');
// let levelForGame = document.querySelector('.levelForGame');

let numberOfLevel

// but0.onclick = function () {
//     warning.style.display = "block";
//     setTimeout(function(){
//         warning.style.display = 'none';
//     }, 1000);
// }

for (let but of buttonLevel) {
    but.onclick = function () {
        console.log('Показать уровень')
        numberOfLevel = but.textContent
        console.log(numberOfLevel)
        if (numberOfLevel == 1) {
            level2.style.display = 'none'
            level3.style.display = 'none'
            level1.classList.add('changeLevel')
            level1.classList.remove('buttonLevel')
            but1.style.display = 'block'
            but0.style.display = 'none'
            // currentLevel.textContent = 'Первый уровень';
            // levelForGame.textContent= numberOfLevel;
        }

        if (numberOfLevel == 2) {
            level1.style.display = 'none'
            level3.style.display = 'none'
            level2.classList.add('changeLevel')
            level2.classList.remove('buttonLevel')
            but1.style.display = 'block'
            but0.style.display = 'none'
            // levelForGame.innerHTML = numberOfLevel;
            // currentLevel.innerHTML = 'Второй уровень';
        }
        if (numberOfLevel == 3) {
            level1.style.display = 'none'
            level2.style.display = 'none'
            level3.classList.add('changeLevel')
            level3.classList.remove('buttonLevel')
            but1.style.display = 'block'
            but0.style.display = 'none'
            // levelForGame.innerHTML = numberOfLevel;
            // currentLevel.innerHTML = 'Третий уровень';
        }
    }
}
// export { numberOfLevel };
