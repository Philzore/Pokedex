function renderPokemonColor() {
    let color = currentPokemonSpecies['color']['name'];
    switch (color) {
        case 'black':
            document.getElementById(`pokedex${i}`).style.backgroundColor = '#B3A9A3';
            document.getElementById(`pokedex-dialog${i}`).style.backgroundColor = '#B3A9A3';
            renderPokemonTypeColor(i, '#C2BAB5');
            break;
        case 'blue':
            document.getElementById(`pokedex${i}`).style.backgroundColor = '#76BEFE';
            document.getElementById(`pokedex-dialog${i}`).style.backgroundColor = '#76BEFE';
            renderPokemonTypeColor(i, '#91CBFE');
            break;
        case 'brown':
            document.getElementById(`pokedex${i}`).style.backgroundColor = '#C8A59A';
            document.getElementById(`pokedex-dialog${i}`).style.backgroundColor = '#C8A59A';
            renderPokemonTypeColor(i, '#D3B7AE');
            break;
        case 'gray':
            document.getElementById(`pokedex${i}`).style.backgroundColor = '#E0E0E6';
            document.getElementById(`pokedex-dialog${i}`).style.backgroundColor = '#E0E0E6';
            renderPokemonTypeColor(i, '#E6E6EB');
            break;
        case 'green':
            document.getElementById(`pokedex${i}`).style.backgroundColor = '#49D0B0';
            document.getElementById(`pokedex-dialog${i}`).style.backgroundColor = '#49D0B0';
            renderPokemonTypeColor(i, '#7FDEC7');
            break;
        case 'pink':
            document.getElementById(`pokedex${i}`).style.backgroundColor = '#FBDEFB';
            document.getElementById(`pokedex${i}`).style.color = 'black';
            document.getElementById(`pokedex-dialog${i}`).style.backgroundColor = '#FBDEFB';
            document.getElementById(`pokedex-dialog${i}`).style.color = 'black';
            renderPokemonTypeColor(i, '#C8B1C8');
            break;
        case 'purple':
            document.getElementById(`pokedex${i}`).style.backgroundColor = '#D1AED1';
            document.getElementById(`pokedex-dialog${i}`).style.backgroundColor = '#D1AED1';
            renderPokemonTypeColor(i, '#DABEDA');
            break;
        case 'red':
            document.getElementById(`pokedex${i}`).style.backgroundColor = '#F66C6D';
            document.getElementById(`pokedex-dialog${i}`).style.backgroundColor = '#F66C6D';
            renderPokemonTypeColor(i, '#F7898A');
            break;
        case 'white':
            document.getElementById(`pokedex${i}`).style.backgroundColor = '#E5E5E5';
            document.getElementById(`pokedex${i}`).style.color = 'black';
            document.getElementById(`pokedex-dialog${i}`).style.backgroundColor = '#E5E5E5';
            document.getElementById(`pokedex-dialog${i}`).style.color = 'black';
            renderPokemonTypeColor(i, '#FFFFFF');
            break;
        case 'yellow':
            document.getElementById(`pokedex${i}`).style.backgroundColor = '#E1C163';
            document.getElementById(`pokedex-dialog${i}`).style.backgroundColor = '#E1C163';
            renderPokemonTypeColor(i, '#FADB7D');
            break;

        default:
            break;
    }
}

function renderPokemonTypeColor(i, colorCode) {
    for (let j = 0; j < document.getElementById(`type${i}`).children.length; j++) {
        const element = document.getElementById(`type${i}`).children[j];
        const elementDialog = document.getElementById(`type-dialog${i}`).children[j];
        element.style.backgroundColor = colorCode;
        elementDialog.style.backgroundColor = colorCode;
    }
}
