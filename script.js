let currentPokemon;
let currentPokemonSpecies;
let pokemonResource;

let i = 1;
let endCounter = 21;
let pokemonLimit;
let activeCard = 0;
let inputField = document.getElementById('search');

let allPokemons = [];
let allPokemonsId = [];
let searchIds = [];


//inputField.addEventListener('input', filterPokemon);

async function loadPokemon() {
    for (i; i < endCounter; i++) {
        let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
        let limitUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
        let pokemonResponse = await fetch(pokemonUrl);
        let spieciesResponse = await fetch(speciesUrl);
        let limitResponse = await fetch(limitUrl);
        currentPokemon = await pokemonResponse.json();
        currentPokemonSpecies = await spieciesResponse.json();
        pokemonResource = await limitResponse.json();
        pokemonLimit = pokemonResource['count'];

        allPokemons.push(currentPokemon['name']);
        allPokemonsId.push(currentPokemon['id']);

        createPokemonCard();

        renderPokemonInfo();

    }
}

async function loadPokemonSearch() {
    document.getElementById('showDialog').innerHTML = '';
    for (let j = 0; j < searchIds.length; j++) {
        const pokemon = searchIds[j];
        i = pokemon;
        let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
        let limitUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
        let pokemonResponse = await fetch(pokemonUrl);
        let spieciesResponse = await fetch(speciesUrl);
        let limitResponse = await fetch(limitUrl);
        currentPokemon = await pokemonResponse.json();
        currentPokemonSpecies = await spieciesResponse.json();
        pokemonResource = await limitResponse.json();
        pokemonLimit = pokemonResource['count'];

        createPokemonCard();

        renderPokemonInfo();
    }
}

function renderPokemonInfo() {
    //name
    document.getElementById(`pokemonName${i}`).innerHTML = currentPokemon['name'];
    document.getElementById(`pokemonName-dialog${i}`).innerHTML = currentPokemon['name'];
    //picture
    document.getElementById(`pokemonImage${i}`).src = currentPokemon['sprites']['other']['official-artwork']['front_shiny'];
    document.getElementById(`pokemonImage-dialog${i}`).src = currentPokemon['sprites']['other']['official-artwork']['front_shiny'];
    //id
    document.getElementById(`idNumber${i}`).innerHTML = `#00${currentPokemon['id']}`;
    document.getElementById(`idNumber-dialog${i}`).innerHTML = `#00${currentPokemon['id']}`;
    //type
    renderPokemonType();
    //colour
    renderPokemonColor();
    //experience
    document.getElementById(`experience${i}`).innerHTML = currentPokemon['base_experience'];
    //height
    document.getElementById(`height${i}`).innerHTML = currentPokemon['height'] / 10 + 'm';
    //weight
    document.getElementById(`weight${i}`).innerHTML = currentPokemon['weight'] / 10 + 'kg';
    //abilities
    renderPokemonAbilities();
    //egg group
    renderPokemonEggGroup();
    //base stats
    renderPokemonBaseStats();
    //moves
    renderPokemonMoves();
}

function renderPokemonType() {
    for (let j = 0; j < currentPokemon['types'].length; j++) {
        const type = currentPokemon['types'][j]['type']['name'];
        const typeDialog = currentPokemon['types'][j]['type']['name'];
        document.getElementById(`type${i}`).innerHTML += `<span class="me-2">${type}</span>`;
        document.getElementById(`type-dialog${i}`).innerHTML += `<span class="me-2">${type}</span>`;
    }
}

function renderPokemonAbilities() {
    for (let j = 0; j < currentPokemon['abilities'].length; j++) {
        const abilitie = currentPokemon['abilities'][j]['ability']['name'];
        document.getElementById(`abilities${i}`).innerHTML += `<span class="me-2">${abilitie}</span>`;
    }
}

function renderPokemonEggGroup() {
    for (let j = 0; j < currentPokemonSpecies['egg_groups'].length; j++) {
        const eggGroup = currentPokemonSpecies['egg_groups'][j]['name'];
        document.getElementById(`egg-group${i}`).innerHTML += `<span class="me-2">${eggGroup}</span>`;
    }
}

function renderPokemonBaseStats() {
    //create variables
    let hp = currentPokemon['stats'][0]['base_stat'];
    let attack = currentPokemon['stats'][1]['base_stat'];
    let defense = currentPokemon['stats'][2]['base_stat'];
    let specialAttack = currentPokemon['stats'][3]['base_stat'];
    let specialDefense = currentPokemon['stats'][4]['base_stat'];
    let speed = currentPokemon['stats'][5]['base_stat'];

    changeBaseStats(hp, attack, defense, specialAttack, specialDefense, speed);
}

function changeBaseStats(hp, attack, defense, specialAttack, specialDefense, speed) {
    document.getElementById(`hp${i}`).innerHTML = hp;
    document.getElementById(`hp-pb${i}`).style.width = hp + '%';

    document.getElementById(`attack${i}`).innerHTML = attack;
    document.getElementById(`attack-pb${i}`).style.width = attack + '%';

    document.getElementById(`defense${i}`).innerHTML = defense;
    document.getElementById(`defense-pb${i}`).style.width = defense + '%';

    document.getElementById(`special-attack${i}`).innerHTML = specialAttack;
    document.getElementById(`special-attack-pb${i}`).style.width = specialAttack + '%';

    document.getElementById(`special-defense${i}`).innerHTML = specialDefense;
    document.getElementById(`special-defense-pb${i}`).style.width = specialDefense + '%';

    document.getElementById(`speed${i}`).innerHTML = speed;
    document.getElementById(`speed-pb${i}`).style.width = speed + '%';
}

function renderPokemonMoves() {
    for (let j = 0; j < currentPokemon['moves'].length; j++) {
        const move = currentPokemon['moves'][j]['move']['name'];
        document.getElementById(`moves${i}`).innerHTML += `<span>${move}</span>`
    }
}

function changeInfo(category, i) {

    switch (category) {
        case 'about':
            document.getElementById(`base-stats${i}`).classList.add('d-none');
            document.getElementById(`moves${i}`).classList.add('d-none');
            document.getElementById(`about${i}`).classList.remove('d-none');
            break;
        case 'base-stats':
            document.getElementById(`about${i}`).classList.add('d-none');
            document.getElementById(`moves${i}`).classList.add('d-none');
            document.getElementById(`base-stats${i}`).classList.remove('d-none');
            break;
        case 'moves':
            document.getElementById(`base-stats${i}`).classList.add('d-none');
            document.getElementById(`about${i}`).classList.add('d-none');
            document.getElementById(`moves${i}`).classList.remove('d-none');
            break;
        default:
            break;
    }
}

function loadMore() {
    endCounter = endCounter + 20;
    if (!document.getElementById('search').value == '') {
        document.getElementById('main-window').innerHTML = '';
        i = 1;
        allPokemons = [];
    }
    if (endCounter > pokemonLimit) {
        endCounter = pokemonLimit;
    }
    document.getElementById('search').value = '';
    setTimeout(loadPokemon, 200);
}

function filterPokemon() {
    if (!document.getElementById('dialog').classList == 'd-none') {
        document.getElementById(`dialog-card${activeCard}`).classList.add('d-none');
        document.getElementById('dialog').classList.add('d-none');
    }
    document.getElementById('main-window').innerHTML = '';
    searchIds = [];
    let search = document.getElementById('search').value;

    search = search.toLowerCase();

    for (let j = 0; j < allPokemons.length; j++) {
        const name = allPokemons[j];
        if (name.toLowerCase().includes(search)) {
            searchIds.push(allPokemonsId[j]);
        }
    }
    loadPokemonSearch();
}

function showDialog(CardNumber) {
    activeCard = CardNumber;
    document.getElementById('dialog').classList.remove('d-none');
    document.getElementById(`dialog-card${CardNumber}`).classList.remove('d-none');
    checkCardNumber();
}

function closeDialog() {
    document.getElementById(`dialog-card${activeCard}`).classList.add('d-none');
    document.getElementById('dialog').classList.add('d-none');
}

function previousCard() {
    document.getElementById(`dialog-card${activeCard}`).classList.add('d-none');
    activeCard = activeCard - 1;
    document.getElementById(`dialog-card${activeCard}`).classList.remove('d-none');
    checkCardNumber();
}

function nextCard() {
    document.getElementById(`dialog-card${activeCard}`).classList.add('d-none');
    activeCard = activeCard + 1;
    document.getElementById(`dialog-card${activeCard}`).classList.remove('d-none');
    checkCardNumber();
}

function checkCardNumber() {
    if (activeCard == 1) {
        document.getElementById('arrow-previous').classList.add('d-none');
        document.getElementById('showDialog').classList.add('margin-arrow-left');
    } else {
        document.getElementById('arrow-previous').classList.remove('d-none');
        document.getElementById('showDialog').classList.remove('margin-arrow-left');
    }
    if (activeCard == allPokemons.length) {
        document.getElementById('arrow-next').classList.add('d-none');
        document.getElementById('showDialog').classList.add('margin-arrow-right');
    } else {
        document.getElementById('arrow-next').classList.remove('d-none');
        document.getElementById('showDialog').classList.remove('margin-arrow-right');
    }
}