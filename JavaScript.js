const keys = document.querySelectorAll('.key')

// Trocando as Cores Das Teclas Quando elas são CLicadas.

const handleMouseDown = (key) => {
    if (key.className.includes('black')){
        key.classList.add('black--pressed')
        return;
    }else{
    key.style.background  = '#b4b4b4';
    }
}

const handleMouseUp = (key) => {
    if (key.className.includes('black')){
        key.classList.remove('black--pressed')
        return;
    }else{
    key.style.background = 'white';
    }
}

keys.forEach((key) => {
    key.addEventListener('mousedown',() => handleMouseDown(key))
    key.addEventListener('mouseup',() => handleMouseUp(key))
});

// Tocando Som Quando As Teclas São CLicadas.