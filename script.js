
//tictactoe



function Gameboard(){
    // creates the board itself

    let board = [[0],[0],[0],
                 [0],[0],[0],
                 [0],[0],[0]];
   
    // get the board.
    const getBoard = () => {
        return board;
    }
        
    const makeMove = (slot, playervalue) => {
        // called when a slot is clicked.
        console.log(slot);

        // if player1: set slots innerHTML to an x
        if (playervalue == 1){
            slot.innerHTML ="x";
        }// if player2: set slots innerHTML to an o
        else if  (playervalue == 2){
            slot.innerHTML ="o";
        }
        // ROTATE PLAYRS.




        // FEEDBACK.
        board[slot] = playervalue;
    }
    


    return {getBoard, makeMove};
}

function Player(value=0){
    //creates player with a unique value
    value = value;

    //methods
    const getValue = () => {
        return value;
    }

    return {getValue};
}

function GameController(){
    // the game will be played through this motherfucker.
    // we summon a board instance and we play on it.



    //we instantiate the players and the board.
    let board = Gameboard();
    let player1 = Player(1);
    let player2 = Player(2);



    //we set the activePlayer to player 0.
    let players = [player1, player2];
    activePlayer = players[0]

    let rotatePlayers = () => {
        //swap active players.
        if (activePlayer === players[0]){
            activePlayer = players[1];
        }else{
            activePlayer = players[0];
        }
    }


    const calcWin = () => {
        //ROWS
        let toprow = document.querySelectorAll('.top');
        let midrow = document.querySelectorAll('.mid');
        let bottomrow = document.querySelectorAll('.bottom');
        //COLS
        let col1 = document.querySelectorAll('.col1');
        let col2 = document.querySelectorAll('.col2');
        let col3 = document.querySelectorAll('.col3');
        //DIAGONALS
        let diagonal1 = document.querySelectorAll('.diagonal1');
        let diagonal2 = document.querySelectorAll('.diagonal2');

        let wins = [toprow, midrow, bottomrow, col1, col2, col3, diagonal1, diagonal2];

        wins.forEach((nodelist)=>{
            let node1 = nodelist[0].innerHTML;
            let node2 = nodelist[1].innerHTML;
            let node3 = nodelist[2].innerHTML;
            if (node1 === node2 && node2 === node3){
                console.log('win win win win. fuck everything else.');
            }
        })
        // this function will be ran every time a slot is clicked.
        // we have the "win patterns" defined through html classes. we grab them.

    }

        // nodes
    let slots = document.querySelectorAll('.slot');
    slots.forEach((slot)=>{
        slot.addEventListener('click', () =>{
            board.makeMove(slot, activePlayer.getValue())
            rotatePlayers();
            calcWin();
        });
    });




    return {};
}


// Gamecontroller is like the master. when we call gamecontroller it does everything.

let game = GameController();

