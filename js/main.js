
// Recuperar valores de los nombres

let namePlayer1 = sessionStorage.getItem("player1");
let namePlayer2 = sessionStorage.getItem("player2");

document.write(namePlayer1);
document.write(namePlayer2);

player1.innerHTML = `${namePlayer1.player1}`;
player2.innerHTML = `${namePlayer2.player2}`;

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
                box.innerHTML = (turn) ? "O" : "X";

                (turn) ? turnP1-- : turnP2--;

                myBoard[box.id] = (turn) ? "O" : "X";

                checkWinner();

                //Cambiamos de turno
                turn = !turn;
            };
        });
    }
);

// Declaramos una función que nos indique qué jugada ha ganado

function gameOver(){
    gameBoard.winner = '?';
    return winner(0,1,2)
        || winner(3,4,5)
        || winner(6,7,8)
        || winner(0,3,6)
        || winner(1,4,7)
        || winner(2,5,8)
        || winner(0,4,8)
        || winner(6,4,2)
        || stalemate();
}

function winner(p1, p2, p3){
    let s = board.boardString;
    let c1 = s.charAt(p1);

    if(c1 == '-') return false;

    let c2 = s.charAt(p2);

    if (c1 !=c2) return false;

    let c3 = s.charAt(p3);

    if (c1 != c3) return false;

    board.winner = c1;
    return true;
}

function stalemate(){
    let s = board.boardString;
    for (var i=0; i<9; i++){
        if(s.charAt(i) == '-') return false;
    }
    board.winner = "C";
    return true;
}