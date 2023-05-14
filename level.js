let buttonLevel = document.querySelectorAll('.buttonLevel');
let level1 = document.querySelector('.level1');
let level2 = document.querySelector('.level2');
let level3 = document.querySelector('.level3');


buttonLevel.onclick = changeLevel();

function changeLevel() {
    if (buttonLevel.value === 1) {
        level2.style.display = "none";
        level3.style.display = "none";
    } else if (buttonLevel.value === 2) {
        level1.style.display = "none";
        level3.style.display = "none";
    } else if (buttonLevel.value === 3) {
        level1.style.display = "none";
        level2.style.display = "none";
    } 
    level2.style.display = "none";
    level3.style.display = "none";
}


changeLevel();