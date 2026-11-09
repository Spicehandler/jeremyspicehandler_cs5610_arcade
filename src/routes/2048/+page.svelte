<script>
    import { game, newGame } from "#lib/game.svelte.js";
    import Board from "#lib/components/Board.svelte";
    import { move, spawn, canMove, hasMoves, moveScore } from "@spicehandler/arcade-core";
    import Controls from "#lib/components/Controls.svelte";
    import ScoreBoard from "#lib/components/ScoreBoard.svelte";

    function keyStroke(event) {
        let direction;
        switch (event.key) {
            case "ArrowLeft":
                direction = "left";
                break;
            case "ArrowRight":
                direction = "right";
                break;
            case "ArrowDown":
                direction = "down";
                break;
            case "ArrowUp":
                direction = "up";
                break;
            default:
                return;
                
        }
        event.preventDefault();
        play(direction)
    }
    function play(direction) {
        if (canMove(game.board, direction)) {
            const points = moveScore(game.board, direction);
            game.board = move(game.board, direction);
            game.score += points;
            game.best = Math.max(game.score, game.best);
            game.board = spawn(game.board);
        }


        }
        let gameOver = $derived(!hasMoves(game.board));
        let won = $derived(game.board.flat().includes(2048));

</script>

<svelte:window onkeydown={keyStroke} />
<svelte:head>
    <title>2048</title>
</svelte:head>
<main>
    <div class="game-header">
    <h1>2048</h1>
    <div aria-live="polite">
        {#if gameOver}
            <p>Game Over!</p>
        {:else if won}
            <p>You win!</p>
        {/if}
    </div>
    <ScoreBoard score={game.score} best={game.best} onnewgame={newGame}
/>
    </div>
    <Board board={game.board} 
    />

    <Controls onmove={play} 
    />
    
</main>
<style>
    .game-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: larger;
    }
    
</style>