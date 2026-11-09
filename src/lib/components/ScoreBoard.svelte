<script>
    let { score, best, onnewgame } = $props();
</script>

<div class=scoreBoard>
<p> SCORE: {score}</p>
<p>BEST: {best}</p>
<button class="btn" onclick={onnewgame}>New Game</button>
</div>
<style>
    .scoreBoard {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        white-space: nowrap;
        font-size: 1rem;
    }
</style>