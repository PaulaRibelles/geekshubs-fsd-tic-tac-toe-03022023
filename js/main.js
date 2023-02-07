
// BOARD

// Convertimos en Array

let board = Array.from(document.getElementsByClassName("cellDesign"));

let turn = true;

// Determinamos 3 turnos por jugador

let turnP1 = 3;
let turnP2 = 3;

// El tablero se compone de 9 celdas

let myBoard = ["","","","","","","","",""];

// Indicamos las opciones ganadoras

let optionsWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Comprobamos por cada movimiento si hay un ganador

const checkWinner = () => {
    console.log(myBoard);
};

// Pintamos X || O según el turno del jugador

board.map(
    (box) => {
        box.addEventListener('click', ()=> {
            if((box.innerHTML === "") && (turnP1 > 0 || turnP2 > 0)){
                box.innerHTML = (turn) ? "X" : "O";

                (turn) ? turnP1-- : turnP2--;

                myBoard[box.id] = (turn) ? "X" : "O";

                checkWinner();

                //Cambiamos de turno
                turn = !turn;
            };
        });
    }
);