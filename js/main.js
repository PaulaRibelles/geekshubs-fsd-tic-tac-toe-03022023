
// Recuperar valores de los nombres

let namePlayer1 = sessionStorage.getItem("player1");
let namePlayer2 = sessionStorage.getItem("player2");

document.getElementById("player_1").innerHTML = `<p>${namePlayer1}<p/>`;
document.getElementById("player_2").innerHTML = `<p>${namePlayer2}<p/>`;

// BOARD


// Convertimos en Array

let board = Array.from(document.getElementsByClassName("cellDesign"));

let turn = true;

// Determinamos 3 turnos por jugador

let turnP1 = 3;
let turnP2 = 3;

let liveP1 = 3;
let liveP2 = 3;

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

// Pintamos X || O según el turno del jugador

board.map(
    (box) => {
        box.addEventListener('click', ()=> {
            if((box.innerHTML === "") && (turnP1 > 0 || turnP2 > 0)){
                box.innerHTML = (turn) ? "O" : "X";
                (turn) ? turnP1-- && liveP1-- : turnP2-- && liveP2--;
                myBoard[box.id] = (turn) ? "O" : "X";
                checkWinner();
                turn = !turn; 
            }else if(box.innerHTML === "O" && turnP1 === 0 && turn == true){
                box.innerHTML = "" ;
                myBoard[box.id] = "";
                turnP1++;
            }else if (box.innerHTML === "X" && turnP2 === 0 && turn == false){
                box.innerHTML = "";
                myBoard[box.id] = "";
                turnP2++;
            }
        });
    }
);

// Comprobamos por cada movimiento si hay un ganador

const checkWinner = () => {

    if ((myBoard[0] === myBoard[1]) && (myBoard[1] === myBoard[2]) && myBoard [0] !==""){
        window.location.href="../pages/winner.html"
    }else if ((myBoard[3] === myBoard[4]) && (myBoard[4] === myBoard[5]) && myBoard [3] !==""){
        window.location.href="../pages/winner.html"
    }else if ((myBoard[6] === myBoard[7]) && (myBoard[7] === myBoard[8]) && myBoard [6] !==""){
        window.location.href="../pages/winner.html"
    }else if ((myBoard[0] === myBoard[3]) && (myBoard[3] === myBoard[6]) && myBoard [0] !==""){
        window.location.href="../pages/winner.html"
    }else if ((myBoard[1] === myBoard[4]) && (myBoard[4] === myBoard[7]) && myBoard [1] !==""){
        window.location.href="../pages/winner.html"
    }else if ((myBoard[2] === myBoard[5]) && (myBoard[5] === myBoard[8]) && myBoard [2] !==""){
        window.location.href="../pages/winner.html"
    }else if ((myBoard[0] === myBoard[4]) && (myBoard[4] === myBoard[8]) && myBoard [0] !==""){
        window.location.href="../pages/winner.html"
    }else if ((myBoard[2] === myBoard[4]) && (myBoard[4] === myBoard[6]) && myBoard [2] !==""){
        window.location.href="../pages/winner.html"
    }else if ((myBoard === "X") && (turn !== true)){
        window.location.href="../pages/winner2.html"
    }
};
