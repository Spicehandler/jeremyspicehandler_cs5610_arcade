<svelte:head>
	<title>Homepage</title>
</svelte:head>

<script> import Nav from "#lib/components/Nav.svelte";
    import Gameroom from '#lib/assets/gameroom.jpg'
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<main>
    <h1>Welcome to The Game Den</h1>
    <img src="{Gameroom}"
    alt="img of gameroom"
    height="300" 
    width="300">
    <h2>About this site</h2>
    <p>You've safely arrived at my game site! This is only the
        landing page but there is so much more. Make sure you 
        use the navigation bar to explore the site. I will be
        adding games over the next several weeks for you to enjoy!
        </p>



</main>
