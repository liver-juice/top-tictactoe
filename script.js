
//tictactoe

function Gameboard(){
    // creates the board itself

    //let rows = 3;
    //let cols = 3;
    // we could loop through rows and cols. but its small enough i make it visually.
    let board = [[],[],[],
                 [],[],[],
                 [],[],[]];
    //this gives us a 3x3 grid to play on

    //methods

    // what methods should the board have? where will these be used.
    // show the board.
    const displayBoard = () => {
        return board
    }
    // fill in the slot with users token


    return {displayBoard};
}

function Player(value=0){
    // when a token is placed on the board, 
    // this function assigns it the appropriate value
    value = value;

    //methods
    //get the value
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

    let players = [player1, player2];
    activePlayer = players[0]

    console.log(activePlayer.getValue());
    //we set the activePlayer to player 0.

    //makeMove(activePlayer)

    //if nobody has won and space exists, alternatePlayers(),

    //then makeMove(activePlayer)



    //methodS

    return {};
}


// Gamecontroller is like the master. when we call gamecontroller it does everything.

let game = GameController();

