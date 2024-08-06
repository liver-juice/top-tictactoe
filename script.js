
//tictactoe



function Gameboard(){
    // creates the board itself

            //ROWS
        const toprow = Array.from(document.querySelectorAll('.top'));
        const midrow = Array.from(document.querySelectorAll('.mid'));
        const bottomrow = Array.from(document.querySelectorAll('.bottom'));
            //COLS
        const col1 = Array.from(document.querySelectorAll('.col1'));
        const col2 = Array.from(document.querySelectorAll('.col2'));
        const col3 = Array.from(document.querySelectorAll('.col3'));
            //DIAGONALS
        const diagonal1 = Array.from(document.querySelectorAll('.diagonal1'));
        const diagonal2 = Array.from(document.querySelectorAll('.diagonal2'));
    
        let board = [toprow, midrow, bottomrow, col1, col2, col3, diagonal1, diagonal2];
   
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

function Player(value){
    //creates player with a unique value
    value = value;
    score = 0;

    //methods
    const getValue = () => {
        return value;
    }

    const getScore = () => {
        return score;
    }

    return {getValue, getScore};
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
        wins = board.getBoard();

        wins.forEach((nodelist)=>{
            const [node1, node2, node3] = nodelist.map(node => node.innerHTML);

             if (node1 && node1 === node2 && node2 === node3){
                if (node1 == "x" || node1 == "o"){
                    // THIS WORKS.---
                    console.log('game over');
                    let winnercontainer = document.querySelector('.winnercontainer');
                    let winningPlayer = activePlayer.getValue();

                    // if player1 wins, set color to red, else blue.
                    if (winningPlayer === 1){
                        winnercontainer.style.color = "red";
                        //increment the winner score
                        let newScore = activePlayer.getScore() + 1;
                        let p1score = document.querySelector('.p1score');
                        p1score.textContent = newScore;
                    }else if (winningPlayer === 2){
                        winnercontainer.style.color = "blue";
                        //increment the winner score
                        let newScore = activePlayer.getScore() + 1;
                        p2score = document.querySelector('.p2score');
                        p2score.textContent = newScore;
                    }
                    
                    // log the winner
                    winnercontainer.innerHTML = `Player ${winningPlayer} wins!`;

                    
                }else{
                
                }   
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
            calcWin();
            rotatePlayers();
        });
    });




    return {};
}


// Gamecontroller is like the master. when we call gamecontroller it does everything.

let game = GameController();

// reset button just calls the gamecontroller again and works right? (surely)
// no.

