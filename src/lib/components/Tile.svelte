<script>
	let { value } = $props();
    import { scale } from 'svelte/transition';
</script>

<div
	class="tile"
	class:light-text={value >= 16}
	style:background-color={`var(--tile-${value})`}
>
    {#key value}
        <span in:scale={{ duration: 300 }}>{value === 0 ? '' : value}</span>
    {/key}
</div>

    


<style>
	.tile {
        color:black;
        border: black solid 3px;
        aspect-ratio: 1;
        text-align: center;
        display: grid;
        place-items: center;
        border-radius: 7px;
        font-family: monospace;
        font-size: 10cqi;
        font-weight: 800;


	}
    .light-text {
        color:aliceblue;
    }
</style>