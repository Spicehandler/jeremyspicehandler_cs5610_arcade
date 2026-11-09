<script>
    let { board } = $props();
    import Tile from "./Tile.svelte";
</script>

<div class="board">
    {#each board.flat() as value, i (i)}
    <Tile {value}/>

    {/each}
</div>

<style>
    .board {
        container-type: inline-size;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 0rem;
        padding: 3rem;
        width: min(100%, 60vh);
        margin: 0 auto;
    }
</style>