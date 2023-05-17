function createPokemonCard() {
    let mainWindow = document.getElementById('main-window');
    mainWindow.innerHTML += `        
    <div class="pokemon-card" id="pokemon-card${i}" >
    <!--Head-->
    <div class="pokedex" id="pokedex${i}" style="background-color: #FFFFFF;" onclick="showDialog(${i})">
        <div class="name-head">
            <h1 id="pokemonName${i}"></h1>
            <span id="idNumber${i}">#</span>
        </div>
        <div class="types" id="type${i}">
            
        </div>
        <div class="d-flex justify-content-center">
            <img class="pokemon-image" id="pokemonImage${i}" src="">
        </div>
    </div>
    <!---->
    
 `;
    createDialogCard();
}

function createDialogCard() {
    document.getElementById('showDialog').innerHTML +=  `
           
    <div class="dialog-card d-none" id="dialog-card${i}" onclick="">
    <!--Head-->
    <div class="pokedex-card" id="pokedex-dialog${i}" style="background-color: #FFFFFF;">
        <div class="name-head">
            <h1 id="pokemonName-dialog${i}"></h1>
            <span id="idNumber-dialog${i}">#</span>
        </div>
        <div class="types" id="type-dialog${i}">
            
        </div>
    </div>
    <!---->
    <div class="info-container ">
        <img id="pokemonImage-dialog${i}" src="">
        <!--Navigation-->
        <ul class="nav nav-underline border-bottom mx-4 justify-content-around">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" onclick="changeInfo('about', ${i})">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" onclick="changeInfo('base-stats', ${i})">Base Stats</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" onclick="changeInfo('moves' , ${i})">Moves</a>
            </li>
        </ul>
        <!---->
        <!--about-->
        <div class="about mx-4" id="about${i}">
            <div class="mb-1 mt-2 d-flex border-bottom">
                <span class="width-175"><b>Base Experience</b></span>
                <div class="d-flex justify-content-end" id="experience${i}">
                
                </div>
            </div>
            <div class="mb-1 d-flex border-bottom">
                <span  class="width-175"><b>Height</b></span>
                <span id="height${i}"></span>
            </div>
            <div class="mb-1 d-flex border-bottom">
                <span  class="width-175"><b>Weight</b></span>
                <span id="weight${i}"></span>
            </div>
            <div class="mb-1 d-flex border-bottom height-75" >
                <span class="width-175"><b>Abilities</b></span>
                <div class="d-flex flex-column" id="abilities${i}">
                
                </div>
            </div>
            <div class="mb-2 d-flex border-bottom height-75 height-auto">
                <span  class="width-175"><b>Egg Group</b></span>
                <div class="d-flex flex-column" id="egg-group${i}">
                
                </div>
            </div>
        </div>
        <!---->
        <!--Base stats-->
        <div class="base-stats d-flex flex-column mx-4 d-none" id="base-stats${i}">

            <div class="d-flex align-items-center border-bottom">
                <span class="width-130"><b>HP</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="hp${i}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="hp-pb${i}" style="width: 25%"></div>
                    </div>
                </div>
            </div>

            <div class="d-flex align-items-center border-bottom">
                <span class="width-130"><b>attack</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="attack${i}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="attack-pb${i}" style="width: 25%"></div>
                    </div>
                </div>
            </div>

            <div class="d-flex align-items-center border-bottom">
                <span class="width-130"><b>defense</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="defense${i}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="defense-pb${i}" style="width: 25%"></div>
                    </div>
                </div>
            </div>
            
            <div class="d-flex align-items-center border-bottom">
                <span class="width-130"><b>special-attack</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="special-attack${i}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="special-attack-pb${i}" style="width: 25%"></div>
                    </div>
                </div>
            </div>
            
            <div class="d-flex align-items-center border-bottom">
                <span class="width-130"><b>special-defense</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="special-defense${i}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="special-defense-pb${i}" style="width: 25%"></div>
                    </div>
                </div>
            </div>
            
            <div class="mb-1 d-flex align-items-center border-bottom">
                <span class="width-130"><b>speed</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="speed${i}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="speed-pb${i}" style="width: 25%"></div>
                    </div>
                </div>
            </div>

        </div>
        <!---->
        <!--Moves-->
        <div class="moves mx-4 mb-2 d-none" id="moves${i}">

        </div>
        <!---->
    </div>
</div>` ;
}