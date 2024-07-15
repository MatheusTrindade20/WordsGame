const words = ["GAME", "HATE", "HOME", "PLAY", "LUAR", "HAIR", "TRUE", "LIKE", "BOLA", "WARM", "COLD", "SALT", "GOLD", "DEAR", "PLOT", "RISE", "JOIA", "LOUD", "ALTO", "MITO", "FATO", "TUDO", "LOVE", "VIDA", "GATO", "PEAO", "ONDA", "FLOR", "DOCE", "FRIO", "HORA", "REAL", "CEDO", "ALTO", "BEST", "WORD", "WILD", "RICH", "LOST", "HOST", "LIFE"];

function trocarPalavra() {
    const keys = document.querySelectorAll(`.key`)
    var min = 0;
    var max = words.length - 1;
    var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min; // Rodando número aleatório de acordo com o array
    palavraAtual = words[numeroAleatorio];
    for (let i=0; i < 4; i++) {
        const mod = document.getElementById(`idLetra${i}`); // Referencia ao elemento html
        mod.textContent = palavraAtual[i]; // Inserindo letra no elemento html
    }
    addAtributo(); // Adiciona atributo após a palavra ser escolhida

    keys.forEach(key => { // Se houver atributos remove
        if (key.classList.contains('completed')) {
            key.classList.remove('completed');
            key.classList.remove('pressed');
        } 
        else {
            key.classList.remove('incompleted');
            key.classList.remove('pressed');
        }
    }) // Fim do foreach
}

function addAtributo() {
    const letras = document.querySelectorAll(".letra");
    let i = 0;
    letras.forEach(letra => { 
        const mod = document.getElementById(`idLetra${i}`);
        const val = mod.textContent;
        letra.setAttribute('data-key', `${val.charCodeAt(0)}`);
        i++;
    })
}

function verifyCompletion() {
    const keys = document.querySelectorAll(`.key`)
    let counter = 0;
    keys.forEach(key => {
        if (key.classList.contains('completed')) {
            counter++;
        }
    })
    if (counter == 4) {
        tocarMario()
        setTimeout(function() {
            trocarPalavra();
        }, 700);
    }
}


function keyPressed(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    if (!key || key.classList.contains('completed')) {
        tocarRock();
        return
    }  // Se não houver chave sai da função

    key.classList.add('completed');
    verifyCompletion();
}

function playMusica() {
    const check = document.getElementById("checkbox");
    const music = document.getElementById("music");
    if (check.checked) {
        music.play();
    }
    else {
        music.pause();
    }
}
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener('click', playMusica);

function tocarMario() {
    const mario = document.getElementById("mario");
    mario.currentTime = 0;
    mario.play();
}
function tocarRock() {
    const rock = document.getElementById("rock");
    rock.currentTime = 0;
    rock.play();
}

trocarPalavra()
window.addEventListener('keydown', keyPressed);