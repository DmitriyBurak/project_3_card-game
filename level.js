let buttonLevel = document.querySelectorAll('.buttonLevel');
let level1 = document.querySelector('.level1');
let level2 = document.querySelector('.level2');
let level3 = document.querySelector('.level3');
let areaLevel = document.querySelector('.area-level');
let buttonStart = document.querySelector('.buttonStarter');
let changeLevel = document.querySelector('.changeLevel');
let but0 = document.querySelector('.but0');
let but1 = document.querySelector('.but1');
let but2 = document.querySelector('.but2');
let but3 = document.querySelector('.but3');

but1.style.display = "none";
but2.style.display = "none";
but3.style.display = "none";

buttonLevel[0].onclick = function () {
    level2.style.display = "none";
    level3.style.display = "none";
    level1.classList.add('changeLevel');
    level1.classList.remove('buttonLevel');
    // changeLevel.href = 'level_1.html' 
    but1.style.display = "";
    but0.style.display = "none";
    but2.style.display = "none";
    but3.style.display = "none";   
}

buttonLevel[1].onclick = function () {
    level1.style.display = "none";
    level3.style.display = "none";
    level2.classList.add('changeLevel');
    level2.classList.remove('buttonLevel');
    // buttonStart.href = 'level_2.html'
    but2.style.display = "";
    but0.style.display = "none";
    but1.style.display = "none";
    but3.style.display = "none";
}

buttonLevel[2].onclick = function () {
    level1.style.display = "none";
    level2.style.display = "none";
    level3.classList.add('changeLevel');
    level3.classList.remove('buttonLevel');
    // buttonStart.href = 'level_3.html'
    but3.style.display = "";
    but0.style.display = "none";
    but1.style.display = "none";
    but2.style.display = "none"; 
}
