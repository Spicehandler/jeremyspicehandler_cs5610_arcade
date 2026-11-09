        <!-- use layout for the nav
         so make the component and then import it into the layout!
         layouts nest.
         the apply simultaneously,
         and each 

         big hint
         tricks we can do to make our page emphasize current page
         $app/state    page, contains all information on page we are looking at
         page ===  currentpage : x ? z
         -->
        <script>
            import { resolve } from '$app/paths';
            import { page } from '$app/state';
        </script>
        
        <header>
            <nav>
                <ul class="link-container">
                    <li class="nav-list"><a 
                        class="btn" href={resolve('/')}
                        aria-current={page.url.pathname ===resolve('/') ? 'page' : undefined}>
                    Home</a></li>
                    <li class="nav-list"><a 
                        class="btn" href={resolve('/crossword')}
                        aria-current={page.url.pathname ===resolve('/crossword') ? 'page' : undefined}>
                    Crossword</a>
                    </li>
                    <li class="nav-list"><a
                        class="btn" href ={resolve('/aboutme')}
                        aria-current={page.url.pathname ===resolve('/aboutme') ? 'page' : undefined}>
                    About Me</a>
                    </li>
                    <li class="nav-list"><a 
                        class="btn" 
                        href={resolve('/contact')}
                        aria-current={page.url.pathname ===resolve('/contact') ? 'page' : undefined}>
                    Contact</a>
                    </li>
                    <li class="nav-list"><a
                        class="btn"
                        href={resolve('/2048')}
                        aria-current={page.url.pathname === resolve('/2048') ? 'page' : undefined}>
                    2048</a>
                    </li>
                </ul>
            </nav>
            <p class="nav-bar-name">Jeremy Spicehandler</p>
        </header>
        <style>
nav {
    padding: 5px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: darkslategray;


}


.link-container{
    display :flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    min-height: 45px;
    padding: 5px;
    gap: 0.5rem;

}
 header p {
    text-align: center;
    font-size: xx-large;
    text-decoration: solid;
    color: whitesmoke;
 }

.nav-list{
    list-style: none;
    display: inline-block;

}

[aria-current="page"]{
    background-color: #C17AFF;
}

header{
    border: var(--color-acct) solid 5px;
    background-color:darkslategrey;

    text-align: center;


}
@media (min-width : 700px){
    header{
        position: sticky;
        top:0%;
        z-index: 10;
    }
    nav{
        position: static;
        height: 45px;
    }

}

        </style>