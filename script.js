
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

    const drawBoard = () => {
        // draws the game in the console.
        console.log('#')
        }

    const calcWin = () => {
        //calculates if the game is over (win or tie)

        return false;
    }

    const makeMove = (playervalue) => {
        // we prompt the user for their move spot.
        slot = (prompt('enter a slot 1-9.')) -1; 

        // FEEDBACK.
        console.log('Player' + playervalue + ' makes a move : ' + slot);
    }
    


    return {getBoard, drawBoard, calcWin, makeMove};
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

    // set the game state (game over = false)
    let gameOver = board.calcWin();


    //draw the game
    while (gameOver === false){
        //while game isnt over, draw board, prompt for move
        board.drawBoard();
        board.makeMove(activePlayer.getValue());

        //rotate the guys, check for gg
        rotatePlayers();
        gameOver = board.calcWin();
    }


    //methods


    return {};
}


// Gamecontroller is like the master. when we call gamecontroller it does everything.

let game = GameController();

