
let playerInputs = {
    player1 : '',
    player2 : ''
};


let inputsCapturados = Array.from(document.getElementsByTagName("input"));
inputsCapturados.map(
    (inputNamePlayer) => {
        inputNamePlayer.addEventListener("input", ()=> {
            //Esta funcion se ejecuta cada vez que alguien escribe en un input.
            for (let elementoQueRecorro in playerInputs){
                if(inputNamePlayer.name == elementoQueRecorro){
                    playerInputs[elementoQueRecorro] = inputNamePlayer.value;
                    sessionStorage.setItem(inputNamePlayer.name, inputNamePlayer.value);
                };
            };
        });
    }
);

const emptyInput = () => {
        if (playerInputs.player1 === '' || playerInputs.player2 === ''){
        return;
    }
    window.location.href="./pages/board.html"
};






