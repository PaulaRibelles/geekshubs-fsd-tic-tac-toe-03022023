
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

let tokenLive = document.getElementById("liveP2_3")

board.map(
    (box) => {
        box.addEventListener('click', ()=> {
            if((box.innerHTML === "") && (turnP1 > 0 || turnP2 > 0)){
                box.innerHTML = (turn) ? "O" : "X";
                (turn) ? turnP1-- : turnP2--;
                (turn) ? liveP1-- : liveP2--;
                
                myBoard[box.id] = (turn) ? "O" : "X";
                checkWinner();
                turn = !turn; 
            }else if(box.innerHTML === "O" && turnP1 === 0 && turn == true){
                box.innerHTML = "" ;
                myBoard[box.id] = "";
                turnP1++;
                tokenLive.innerHTML = '<img src="../img/live3.png" alt="live1>'
            }else if (box.innerHTML === "X" && turnP2 === 0 && turn == false){
                box.innerHTML = "";
                myBoard[box.id] = "";
                turnP2++;
            }
            restLiveP1();
            restLiveP2();
            // plusLiveP1();
        });
    }
);

// Comprobamos por cada movimiento si hay un ganador

const checkWinner = () => {

    if ((myBoard[0] === myBoard[1]) && (myBoard[1] === myBoard[2]) && myBoard [0] !=="" && myBoard === "O"){
        
        window.location.href="../pages/winner.html"
        // if (myBoard [0] === "O"){
        //     window.location.href="../pages/winner.html"
        // }else if (myBoard [0] === "X"){
        //     window.location.href="../pages/winner2.html"
        // }
    }else if ((myBoard[3] === myBoard[4]) && (myBoard[4] === myBoard[5]) && myBoard [3] !==""){

        if (myBoard [3] === "O"){
            window.location.href="../pages/winner.html"
        }else if (myBoard [3] === "X"){
            window.location.href="../pages/winner2.html"
        }

    }else if ((myBoard[6] === myBoard[7]) && (myBoard[7] === myBoard[8]) && myBoard [6] !==""){

        if (myBoard [6] === "O"){
            window.location.href="../pages/winner.html"
        }else if (myBoard [6] === "X"){
            window.location.href="../pages/winner2.html"
        }

    }else if ((myBoard[0] === myBoard[3]) && (myBoard[3] === myBoard[6]) && myBoard [0] !==""){

        if (myBoard [0] === "O"){
            window.location.href="../pages/winner.html"
        }else if (myBoard [0] === "X"){
            window.location.href="../pages/winner2.html"
        }

    }else if ((myBoard[1] === myBoard[4]) && (myBoard[4] === myBoard[7]) && myBoard [1] !==""){

        if (myBoard [1] === "O"){
            window.location.href="../pages/winner.html"
        }else if (myBoard [1] === "X"){
            window.location.href="../pages/winner2.html"
        }

    }else if ((myBoard[2] === myBoard[5]) && (myBoard[5] === myBoard[8]) && myBoard [2] !==""){

        if (myBoard [2] === "O"){
            window.location.href="../pages/winner.html"
        }else if (myBoard [2] === "X"){
            window.location.href="../pages/winner2.html"
        }

    }else if ((myBoard[0] === myBoard[4]) && (myBoard[4] === myBoard[8]) && myBoard [0] !==""){

        if (myBoard [0] === "O"){
            window.location.href="../pages/winner.html"
        }else if (myBoard [0] === "X"){
            window.location.href="../pages/winner2.html"
        }

    }else if ((myBoard[2] === myBoard[4]) && (myBoard[4] === myBoard[6]) && myBoard [2] !==""){

        if (myBoard [2] === "O"){
            window.location.href="../pages/winner.html"
        }else if (myBoard [2] === "X"){
            window.location.href="../pages/winner2.html"
        }
    }
}


const restLiveP1 = () =>{
    if (liveP1 == 2){
        let token1 = document.getElementById("liveP1_1");
        token1.innerHTML = "";
    }else if (liveP1 == 1){
        let token2 = document.getElementById("liveP1_2");
        token2.innerHTML = "";
    }else if (liveP1 == 0){
        let token3 = document.getElementById("liveP1_3");
        token3.innerHTML = "";
    }
}

const restLiveP2 = () =>{
    if (liveP2 == 2){
        let token1 = document.getElementById("liveP2_1");
        token1.innerHTML = "";
    }else if (liveP2 == 1){
        let token2 = document.getElementById("liveP2_2");
        token2.innerHTML = "";
    }else if (liveP2 == 0){
        let token3 = document.getElementById("liveP2_3");
        token3.innerHTML = "";
    }
}

// const plusLiveP1 = () =>{
//     if ((liveP1 == 1) && (turn == true)){
//         console.log("Hola")
//         let token3 = document.getElementById("liveP2_3");

//         // token3 = "";
//         token3.innerHTML = `X`
//     }
// }

// const plusLiveP2 = () =>{
//     if ((liveP2 == 0) && (turn == false)){
//         let token3 = document.getElementById("liveP2_3");
//         token3++;
//     }
// }