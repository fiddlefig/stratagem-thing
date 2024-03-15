const upArrow = '&#129093;';
const downArrow = '&#129095;';
const leftArrow = '&#129092;';
const rightArrow = '&#129094;';

const strat1 = ['&#129093;', '&#129095;', '&#129094;', '&#129092;', '&#129093;']


const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const gameArea = document.getElementById('gameArea');
const iconDisplay = document.getElementById('iconDisplay');
const stratDisplay = document.getElementById('strat-display');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2')




button1.addEventListener('click', function() {
    stratDisplay.innerHTML = s1.innerHTML;
    stratDisplay.style.fontSize = '85px';
    // stratDisplay.style.color = 'rgb(53, 53, 53)';
    gameArea.innerHTML = " ";
    document.addEventListener('keydown', function(event) {
        alert('key down!')
    })
    
});
button2.addEventListener('click', function() {
    gameArea.innerHTML = s2.innerHTML;
    gameArea.style.fontSize = '85px';
    gameArea.style.color = 'rgb(53, 53, 53)';
})







