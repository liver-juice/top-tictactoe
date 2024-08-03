
//tictactoe

function Gameboard(){
    // creates the board itself

    //let rows = 3;
    //let cols = 3;
    // we could loop through rows and cols. but its small enough i make it visually.
    let board = [[0],[0],[0],
                 [0],[0],[0],
                 [0],[0],[0]];
   
    // get the board.
    const getBoard = () => {
        return board;
    }

    // drawBoard function had previously satten here~~~~~~~~~~~~
        
    const makeMove = (playervalue) => {
        // we prompt the user for their move spot.
        slot = (prompt('enter a slot 1-9.')) -1; 

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

    let drawBoard = () => {
        // draws the game in the console.
        // we make the 3 rows.
        let theboard = board.getBoard(); 
        row1=[theboard[0], theboard[1], theboard[2]];
        row2=[theboard[3], theboard[4], theboard[5]];
        row3=[theboard[6], theboard[7], theboard[8]];
        //then we print the rows
        theRows = [row1, row2, row3];
        theRows.forEach((row) =>{
            currentRow = "";
            row.forEach((slot) =>{
                if (slot == '0'){
                    currentRow = currentRow + '- ';
                }
                if (slot == '1'){
                    currentRow = currentRow + 'x ';
                }
                if (slot == '2'){
                    currentRow = currentRow + 'o ';
                }
            })
            console.log(currentRow + ' |' +Math.random());
        })
        console.log(`~~~~~~ Player${activePlayer.getValue()}'s Turn (slot 1-9):`)
    }

    const calcWin = () => {
        //calculates if the game is over (win or tie)
        let theboard = board.getBoard(); 
        // THIS IS STRAIGHT ASS!
        row1=[theboard[0], theboard[1], theboard[2]];
        row2=[theboard[3], theboard[4], theboard[5]];
        row3=[theboard[6], theboard[7], theboard[8]];

        // ROW MATCHES.
        if (theboard[0] === theboard[1] && theboard[1] === theboard[2]){
            return true; // FIRST ROW.
        }
        if (theboard[3] === theboard[4] && theboard[4] === theboard[5]){
            return true; // SECOND ROW.
        }
        if (theboard[6] === theboard[7] && theboard[7] === theboard[8]){
            return true; // THIRD ROW.
        }
        //COL MATCHES.
        if (theboard[0] === theboard[3] && theboard[3] === theboard[6]){
            return true; // FIRST ROW.
        }
        if (theboard[1] === theboard[4] && theboard[4] === theboard[7]){
            return true; // SECOND ROW.
        }
        if (theboard[2] === theboard[5] && theboard[5] === theboard[8]){
            return true; // THIRD ROW.
        }

        //DIAGONALS.
        if (theboard[0] === theboard[4] && theboard[4] === theboard[8]){
            return true; // FIRST ROW.
        }
        if (theboard[6] === theboard[4] && theboard[4] === theboard[2]){
            return true; // SECOND ROW.
        }
        


        // how tf we do this.
        // define the win patterns as arrays.
        // if any of them match. its a gg for active player.
        // if nothing equals 0 and theres no winner. its a tie.
        
        
        return false;
    }

    // set the game state (game over = false)
    let gameOver = calcWin();


    //draw the game
    while (gameOver === false){
        //while game isnt over, draw board, prompt for move
        drawBoard();
        board.makeMove(activePlayer.getValue());

        //rotate the guys, check for gg
        rotatePlayers();
        gameOver = calcWin();
    }
    if (gameOver === true){
        rotatePlayers(); // we rerotate back to the winner.
        drawBoard();
        console.log(`Player${activePlayer.getValue()} has won!`)
    }


    //methods
1

    return {};
}


// Gamecontroller is like the master. when we call gamecontroller it does everything.

let game = GameController();

