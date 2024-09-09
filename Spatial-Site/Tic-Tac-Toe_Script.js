let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function makeMove(index) {
    if (board[index] !== '' || !gameActive) return;

    board[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;

    checkWinner();
}

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('message').innerText = `بازیکن ${currentPlayer} برنده شد!`;
            gameActive = false;
            document.getElementById('restart').style.display = 'block';
            return;
        }
    }

    if (!board.includes('')) {
        document.getElementById('message').innerText = 'بازی مساوی شد!';
        gameActive = false;
        document.getElementById('restart').style.display = 'block';
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('message').innerText = '';
    document.getElementById('restart').style.display = 'none';

    Array.from(document.getElementById('board').children).forEach(cell => {
        cell.innerText = '';
    });
}

// شروع بازی
restartGame();
