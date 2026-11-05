<svelte:head>
	<title>Crossword</title>
</svelte:head>
<main>
    <h1>Crossword Puzzle</h1>
    <div class="game-container">
        <div class="box-container block">
        </div>
        <div class="box-container">
            <span>1</span>
            <input type="text" maxlength="1" autocomplete="off"
            aria-label="Row 1, Column 2, 1 Across, 1 Down">
        </div>
        <div class="box-container">
            <span>2</span>
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 1, Column 3, 1 Across, 2 Down">
        </div>
        <div class="box-container">
            <span>3</span>
            <input type="text" maxlength="1" autocomplete="off"
            aria-label="Row 1, Column 4, 1 Across, 3 Down">
        </div>
        <div class="box-container block">
        </div>
        <div class="box-container">
            <span>4</span>
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 2, Column 1, 4 Across, 4 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 2, Column 2, 4 Across, 1 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 2, Column 3, 4 Across, 2 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 2, Column 4, 4 Across, 3 Down">
        </div>
        <div class="box-container">
            <span>5</span>
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 2, Column 5, 4 Across, 5 Down">
        </div>
        <div class="box-container">
            <span>6</span>
            <input type="text" maxlength="1" autocomplete="off"
            aria-label="Row 3, Column 1, 6 Across, 4 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 3, Column 2, 6 Across, 1 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 3, Column 3, 6 Across, 2 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 3, Column 4, 6 Across, 3 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 3, Column 5, 6 Across, 5 Down">
        </div>
        <div class="box-container">
            <span>7</span>
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 4, Column 1, 7 Across, 4 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 4, Column 2, 7 Across, 1 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 4, Column 3, 7 Across, 2 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 4, Column 4, 7 Across, 3 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 4, Column 5, 7 Across, 5 Down">
        </div>
        <div class="box-container block">
        </div>
        <div class="box-container">
            <span>8</span>
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 5, Column 2, 8 Across, 1 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 5, Column 3, 8 Across, 2 Down">
        </div>
        <div class="box-container">
            <input type="text" maxlength="1" autocomplete="off" 
            aria-label="Row 5, Column 4, 8 Across, 3 Down">
        </div>
        <div class="box-container block">
        </div>
    
    </div>
    <section class="clues">
        <h2>Clues</h2>
        <div class="clue-list">
            <h3 class="clue-heading">Across</h3>
            <ol>
                <li value="1">Place to order a drink, or a measure of music</li>
                <details>
                    <summary>Click for answer</summary>
                    bar
                </details>
        
                <li value="4">What you earn at a job or win on a game show</li>
                <details>
                    <summary>Click for answer</summary>
                    money
                </details>
                <li value="6">Two under par in golf</li>
                <details>
                    <summary>Click for answer</summary>
                    eagle
                </details>
                <li value="7">Trick or _____</li>
                <details>
                    <summary>Click for answer</summary>
                    treat
                </details>
                <li value="8">Not wet</li>
                <details>
                    <summary>Click for answer</summary>
                    dry
                </details>
            </ol>
            <h3 class="clue-heading">Down</h3>
            <ol>
                <li>Chess and checkers are played on one</li>
                <details>
                    <summary>Click for answer</summary>
                    board
                </details>
                <li>Rage</li>
                <details>
                    <summary>Click for answer</summary>
                    anger
                </details>
                <li>Race where teammates pass a baton</li>
                <details>
                    <summary>Click for answer</summary>
                    relay
                </details>
                <li>Famous NY museum</li>
                <details>
                    <summary>Click for answer</summary>
                    met
                </details>
                <li>Still to come</li>
                <details>
                    <summary>Click for answer</summary>
                    yet
                </details>
            </ol>

        </div>

    </section>

</main>

<style>
    .game-container{
    justify-self: center;
    display: grid;
    grid-template-columns: repeat(5, 48px);
    grid-template-rows: repeat(5, 48px);

}
input {
    width:100%;
    height: 100%;
    text-align: center;
    font-size: x-large;
}

.box-container{
    position: relative;
}
span{
    position: absolute;
    top: 3%;
    left: 3%;
    font-size: smaller;
}
.block{
    background-color: black;
}
.clue-heading{
    text-align: left;

}
li::marker{
    font-family: monospace;
}
</style>