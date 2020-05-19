let letters = 'abcdefghijklmnopqrstuvwxyz';
let ln = letters.length;
let mainDiv = document.getElementById('letter');
let body = document.body;

const getRandomNumber = (range) => {
    return Math.floor(Math.random() * Math.floor(range));
};

const flash = (color) => {
    body.style.backgroundColor = color;
    console.log(color);
};

mainDiv.innerHTML = letters[getRandomNumber(ln)];

document.addEventListener('keypress', (e) => {
    let pressed = e.key;
    let toPress = mainDiv.innerHTML;
    if (pressed == toPress) {
        body.style.backgroundColor = 'white';
        let letter = letters[getRandomNumber(ln)];
        mainDiv.innerHTML = letter;
    } else {
        flash('red');
    }
});