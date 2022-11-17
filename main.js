window.addEventListener('DOMContentLoaded', main);

function main() {

    // getPlayerName;
    loadFrozenLakeScene();

}



function getPlayerName() {
    const playerName = "random";
}


// -----SCENES-----
function loadStartScene() {

}

function loadFrozenLakeScene() {
    const text = document.getElementById('world-text');
    const north = document.getElementById('north');
    const south = document.getElementById('south');
    const east = document.getElementById('east');
    const west = document.getElementById('west');
    text.textContent = "You are standing by the Frozen Lake. You see a Wizard.";
    north.addEventListener('click', loadSolemnVillageScene);

}

function loadSolemnVillageScene() {
    const text = document.getElementById('world-text');
    const north = document.getElementById('north');
    const south = document.getElementById('south');
    const east = document.getElementById('east');
    const west = document.getElementById('west');
    text.textContent = "You are in the Solemn Village.";
    north.addEventListener('click', loadEnchantedForestScene);
    south.addEventListener('click', loadFrozenLakeScene);

}

function loadEnchantedForestScene() {
    const text = document.getElementById('world-text');
    const north = document.getElementById('north');
    const south = document.getElementById('south');
    const east = document.getElementById('east');
    const west = document.getElementById('west');
    text.textContent = "You are in the Enchanted Forest";
    north.addEventListener('click', loadDragonCastleScene);
    south.addEventListener('click', loadSolemnVillageScene);
    west.addEventListener('click', loadCaveOfMagicScene);

}

function loadCaveOfMagicScene() {
    const text = document.getElementById('world-text');
    const north = document.getElementById('north');
    const south = document.getElementById('south');
    const east = document.getElementById('east');
    const west = document.getElementById('west');
    text.textContent = "You are in the Cave of Magic";
    east.addEventListener('click', loadEnchantedForestScene);

}

function loadDragonCastleScene() {
    const text = document.getElementById('world-text');
    const north = document.getElementById('north');
    const south = document.getElementById('south');
    const east = document.getElementById('east');
    const west = document.getElementById('west');
    text.textContent = "You are outside the DragonCastle";
    south.addEventListener('click', loadEnchantedForestScene);

}



// -----SCENER ATT SKAPA-----
// DRAGONCASTLE
// FROZEN LAKE
// ENCHANTED FOREST
// SOLEMN VILLAGE
// CAVE OF MAGIC

// -----FÖREMÅL ATT SKAPA-----
// DRAGONCRYSTAL - Finns i DRAGONCASTLE, slutmålet
// SWORD - Finns hos BLACKSMITH i SOLEMN VILLAGE
// BREAD - Finns hos MERCHANT i SOLEMN VILLAGE
// MAGIC BOOK - Finns i CAVE OF MAGIC
// INVISIBILITY CLOAK - Finns hos WIZARD i FROZEN LAKE

// -----KARAKTÄRER ATT SKAPA-----
// WIZARD
// BLACKSMITH
// MERCHANT
// TROLL

// -----FIENDER ATT SKAPA-----
// Dragon
// Evil Wizard
// Orch
// Pack of Wolves