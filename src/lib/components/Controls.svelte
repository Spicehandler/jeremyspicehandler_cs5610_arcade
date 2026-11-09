<script>
	let { onmove } = $props();
</script>

<div class="controls">
	<button class="btn up" aria-label="Move up" onclick={() => onmove('up')}>↑</button>
	<button class="btn left" aria-label="Move left" onclick={() => onmove('left')}>←</button>
	<button class="btn down" aria-label="Move down" onclick={() => onmove('down')}>↓</button>
	<button class="btn right" aria-label="Move right" onclick={() => onmove('right')}>→</button>
</div>

<style>
.controls {
	display: grid;
	grid-template-areas:
		'.    up   .'
		'left down right';
	grid-template-columns: repeat(3, 4rem);
	justify-content: center;
	gap: 0.25rem;
}
	.up    { grid-area: up; }
	.left  { grid-area: left; }
	.down  { grid-area: down; }
	.right { grid-area: right; }
    @media (min-width: 700px) {
        .controls {
            display: none;
        }
    }
</style>