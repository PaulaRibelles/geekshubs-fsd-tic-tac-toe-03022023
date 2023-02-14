
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
    if ((myBoard[optionsWinner[0][0]] === "X") && (myBoard[optionsWinner[0][1]] === "X") && (myBoard[optionsWinner[0][2]] === "X")){
        window.location.href= "../pages/winner2.html"
    } else if  ((myBoard[optionsWinner[0][0]] === "O") && (myBoard[optionsWinner[0][1]] === "O") && (myBoard[optionsWinner[0][2]] === "O")){
        window.location.href= "../pages/winner.html"
    }
    else if ((myBoard[optionsWinner[1][0]] === "X") && (myBoard[optionsWinner[1][1]] === "X") && (myBoard[optionsWinner[1][2]] === "X")){
        window.location.href= "../pages/winner2.html"
    } else if  ((myBoard[optionsWinner[1][0]] === "O") && (myBoard[optionsWinner[1][1]] === "O") && (myBoard[optionsWinner[1][2]] === "O")){
        window.location.href= "../pages/winner.html"
    }
    else if ((myBoard[optionsWinner[2][0]] === "X") && (myBoard[optionsWinner[2][1]] === "X") && (myBoard[optionsWinner[2][2]] === "X")){
        window.location.href= "../pages/winner2.html"
    } else if  ((myBoard[optionsWinner[2][0]] === "O") && (myBoard[optionsWinner[2][1]] === "O") && (myBoard[optionsWinner[2][2]] === "O")){
        window.location.href= "../pages/winner.html"
    }
    else if ((myBoard[optionsWinner[0][0]] === "X") && (myBoard[optionsWinner[1][0]] === "X") && (myBoard[optionsWinner[2][0]] === "X")){
        window.location.href= "../pages/winner2.html"
    } else if  ((myBoard[optionsWinner[0][0]] === "O") && (myBoard[optionsWinner[1][0]] === "O") && (myBoard[optionsWinner[2][0]] === "O")){
        window.location.href= "../pages/winner.html"
    }
    else if ((myBoard[optionsWinner[0][1]] === "X") && (myBoard[optionsWinner[1][1]] === "X") && (myBoard[optionsWinner[2][1]] === "X")){
        window.location.href= "../pages/winner2.html"
    } else if  ((myBoard[optionsWinner[0][1]] === "O") && (myBoard[optionsWinner[1][1]] === "O") && (myBoard[optionsWinner[2][1]] === "O")){
        window.location.href= "../pages/winner.html"
    }
    else if ((myBoard[optionsWinner[0][2]] === "X") && (myBoard[optionsWinner[1][2]] === "X") && (myBoard[optionsWinner[2][2]] === "X")){
        window.location.href= "../pages/winner2.html"
    } else if  ((myBoard[optionsWinner[0][2]] === "O") && (myBoard[optionsWinner[1][2]] === "O") && (myBoard[optionsWinner[2][2]] === "O")){
        window.location.href= "../pages/winner.html"
    }
    else if ((myBoard[optionsWinner[0][0]] === "X") && (myBoard[optionsWinner[1][1]] === "X") && (myBoard[optionsWinner[2][2]] === "X")){
        window.location.href= "../pages/winner2.html"
    } else if  ((myBoard[optionsWinner[0][0]] === "O") && (myBoard[optionsWinner[1][1]] === "O") && (myBoard[optionsWinner[2][2]] === "O")){
        window.location.href= "../pages/winner.html"
    }
    else if ((myBoard[optionsWinner[0][2]] === "X") && (myBoard[optionsWinner[1][1]] === "X") && (myBoard[optionsWinner[2][0]] === "X")){
        window.location.href= "../pages/winner2.html"
    } else if  ((myBoard[optionsWinner[0][2]] === "O") && (myBoard[optionsWinner[1][1]] === "O") && (myBoard[optionsWinner[2][0]] === "O")){
        window.location.href= "../pages/winner.html"
    }
};

// Pintamos X || O según el turno del jugador

board.map(
    (box) => {
        box.addEventListener('click', ()=> {
            if((box.innerHTML === "") && (turnP1 > 0 || turnP2 > 0)){
                box.innerHTML = (turn) ? "O" : "X";
                (turn) ? turnP1-- : turnP2--;
                myBoard[box.id] = (turn) ? "O" : "X";
                if (checkWinner()) {
                    // console.log(myBoard[box.id]);
                }
                turn = !turn; 
            };
        });
    }
);


