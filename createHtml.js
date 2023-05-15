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
    </div>
    <!---->
    <div class="info-container">
        <img id="pokemonImage${i}" src="">
        <!--Navigation-->
        <ul class="nav nav-underline border-bottom mx-4 justify-content-center">
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
            <div class="mb-2 d-flex border-bottom height-75">
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

function createDialogCard(cardNumber) {
    document.getElementById('single-Pokedex').innerHTML =  `        
    <div class="pokemon-card" id="pokemon-card${cardNumber}">
    <!--Head-->
    <div class="pokedex" id="pokedex${cardNumber}" style="background-color: #FFFFFF;">
        <div class="name-head">
            <h1 id="pokemonName${cardNumber}"></h1>
            <span id="idNumber${cardNumber}">#</span>
        </div>
        <div class="types" id="type${cardNumber}">
            
        </div>
    </div>
    <!---->
    <div class="info-container">
        <img id="pokemonImage${cardNumber}" src="">
        <!--Navigation-->
        <ul class="nav nav-underline border-bottom mx-4 justify-content-center">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" onclick="changeInfo('about', ${cardNumber})">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" onclick="changeInfo('base-stats', ${cardNumber})">Base Stats</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" onclick="changeInfo('moves' , ${cardNumber})">Moves</a>
            </li>
        </ul>
        <!---->
        <!--about-->
        <div class="about mx-4" id="about${cardNumber}">
            <div class="mb-1 mt-2 d-flex border-bottom">
                <span class="width-175"><b>Base Experience</b></span>
                <div class="d-flex justify-content-end" id="experience${cardNumber}">
                
                </div>
            </div>
            <div class="mb-1 d-flex border-bottom">
                <span  class="width-175"><b>Height</b></span>
                <span id="height${cardNumber}"></span>
            </div>
            <div class="mb-1 d-flex border-bottom">
                <span  class="width-175"><b>Weight</b></span>
                <span id="weight${cardNumber}"></span>
            </div>
            <div class="mb-1 d-flex border-bottom height-75" >
                <span class="width-175"><b>Abilities</b></span>
                <div class="d-flex flex-column" id="abilities${cardNumber}">
                
                </div>
            </div>
            <div class="mb-2 d-flex border-bottom height-75">
                <span  class="width-175"><b>Egg Group</b></span>
                <div class="d-flex flex-column" id="egg-group${cardNumber}">
                
                </div>
            </div>
        </div>
        <!---->
        <!--Base stats-->
        <div class="base-stats d-flex flex-column mx-4 d-none" id="base-stats${cardNumber}">

            <div class="d-flex align-items-center border-bottom">
                <span class="width-130"><b>HP</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="hp${cardNumber}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="hp-pb${cardNumber}" style="width: 25%"></div>
                    </div>
                </div>
            </div>

            <div class="d-flex align-items-center border-bottom">
                <span class="width-130"><b>attack</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="attack${cardNumber}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="attack-pb${cardNumber}" style="width: 25%"></div>
                    </div>
                </div>
            </div>

            <div class="d-flex align-items-center border-bottom">
                <span class="width-130"><b>defense</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="defense${cardNumber}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="defense-pb${cardNumber}" style="width: 25%"></div>
                    </div>
                </div>
            </div>
            
            <div class="d-flex align-items-center border-bottom">
                <span class="width-130"><b>special-attack</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="special-attack${cardNumber}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="special-attack-pb${cardNumber}" style="width: 25%"></div>
                    </div>
                </div>
            </div>
            
            <div class="d-flex align-items-center border-bottom">
                <span class="width-130"><b>special-defense</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="special-defense${cardNumber}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="special-defense-pb${cardNumber}" style="width: 25%"></div>
                    </div>
                </div>
            </div>
            
            <div class="mb-1 d-flex align-items-center border-bottom">
                <span class="width-130"><b>speed</b></span>
                <div class="d-flex flex-column align-items-center"> 
                    <span id="speed${cardNumber}">50</span>
                    <div class="progress progessbar-size mb-1"  role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" id="speed-pb${cardNumber}" style="width: 25%"></div>
                    </div>
                </div>
            </div>

        </div>
        <!---->
        <!--Moves-->
        <div class="moves mx-4 mb-2 d-none" id="moves${cardNumber}">

        </div>
        <!---->
    </div>
</div>` ;
}