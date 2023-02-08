let playerInputs = {
    player1 : '',
    plaer2 : ''
};

let inputsCapturados = Array.from(document.getElementsByTagName("input"));

const save = () => {
    sessionStorage.setItem("datosUsuarios", JSON.stringify(playerInputs));
};

const read = () => {
    let datosDeSesion = JSON.parse(sessionStorage.getItem("datosUsuarios"));

    console.log(datosDeSesion);
};

inputsCapturados.map(
    (inputNamePlayer) => {
        inputNamePlayer.addEventListener("input", ()=> {
            //Esta funcion se ejecuta cada vez que alguien escribe en un input.
            for(let elementoQueRecorro in playerInputs){
                if(inputNamePlayer.name === elementoQueRecorro){
                    playerInputs[elementoQueRecorro] = inputNamePlayer.value;
                };
            };
        });
    }
);

function playersnames(){
    document.getElementsByTagName('input').value;
    document.getElementsByTagName('playersnames').innerHTML = userInput;
};