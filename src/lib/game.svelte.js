import { spawn } from '@spicehandler/arcade-core'

function newBoard() {
    const empty = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    return spawn(spawn(empty));
}

export const game = $state({
    board: newBoard(),
    score: 0, 
    best: 0
})

export function newGame() {
    game.board = newBoard();
    game.score = 0;
}