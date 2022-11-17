window.addEventListener('DOMContentLoaded', main);


function main() {

    loadFrozenLakeScene();
}


// -----SCENES-----

function loadFrozenLakeScene() {
    const text = document.getElementById('world-text');
    const lookText = document.getElementById('look-text');
    const north = document.getElementById('north');
    const south = document.getElementById('south');
    const west = document.getElementById('west');
    const east = document.getElementById('east');
    const look = document.getElementById('look-around');

    text.textContent = "You are standing by the Frozen Lake.";
    lookText.innerHTML = "";
    north.addEventListener('click', loadSolemnVillageScene);
    south.addEventListener('click', loadFrozenLakeScene);
    west.addEventListener('click', loadFrozenLakeScene);
    east.addEventListener('click', loadFrozenLakeScene);
    look.addEventListener('click', lookingAroundFrozenLake);
}

function loadSolemnVillageScene() {
    const text = document.getElementById('world-text');
    const lookText = document.getElementById('look-text');
    const north = document.getElementById('north');
    const south = document.getElementById('south');
    const west = document.getElementById('west');
    const east = document.getElementById('east');
    const look = document.getElementById('look-around');

    text.textContent = "You are in the Solemn Village.";
    lookText.innerHTML = "";
    north.addEventListener('click', loadEnchantedForestScene);
    south.addEventListener('click', loadFrozenLakeScene);
    west.addEventListener('click', loadSolemnVillageScene);
    east.addEventListener('click', loadSolemnVillageScene);
    look.addEventListener('click', lookingAroundSolemnVillage);
}

function loadEnchantedForestScene() {
    const text = document.getElementById('world-text');
    const lookText = document.getElementById('look-text');
    const north = document.getElementById('north');
    const south = document.getElementById('south');
    const west = document.getElementById('west');
    const east = document.getElementById('east');
    const look = document.getElementById('look-around');

    text.textContent = "You are in the Enchanted Forest";
    lookText.innerHTML = "";
    north.addEventListener('click', loadDragonCastleScene);
    south.addEventListener('click', loadSolemnVillageScene);
    west.addEventListener('click', loadCaveOfMagicScene);
    east.addEventListener('click', loadEnchantedForestScene);
    look.addEventListener('click', lookingAroundEnchantedForest);
}

function loadCaveOfMagicScene() {
    const text = document.getElementById('world-text');
    const lookText = document.getElementById('look-text');
    const north = document.getElementById('north');
    const south = document.getElementById('south');
    const west = document.getElementById('west');
    const east = document.getElementById('east');
    const look = document.getElementById('look-around');


    text.textContent = "You are in the Cave of Magic";
    lookText.innerHTML = "";
    north.addEventListener('click', loadCaveOfMagicScene);
    south.addEventListener('click', loadCaveOfMagicScene);
    west.addEventListener('click', loadCaveOfMagicScene);
    east.addEventListener('click', loadEnchantedForestScene);
    look.addEventListener('click', lookingAroundCaveOfMagic);
}

function loadDragonCastleScene() {
    const text = document.getElementById('world-text');
    const lookText = document.getElementById('look-text');
    const north = document.getElementById('north');
    const south = document.getElementById('south');
    const west = document.getElementById('west');
    const east = document.getElementById('east');
    const look = document.getElementById('look-around');

    text.textContent = "You are outside the DragonCastle";
    lookText.innerHTML = "";
    north.addEventListener('click', loadDragonCastleScene);
    south.addEventListener('click', loadEnchantedForestScene);
    west.addEventListener('click', loadDragonCastleScene);
    east.addEventListener('click', loadDragonCastleScene);
    look.addEventListener('click', lookingAroundDragonCastle);
}

// -----LOOKING AROUND-----
function lookingAroundFrozenLake() {
    const lookText = document.getElementById('look-text');
    lookText.innerHTML = "";

    lookText.textContent = "There is a WIZARD here...";

}

function lookingAroundSolemnVillage() {
    const lookText = document.getElementById('look-text');
    lookText.innerHTML = "";

    lookText.textContent = "There is a BLACKSMITH here...";

}

function lookingAroundEnchantedForest() {
    const lookText = document.getElementById('look-text');
    lookText.innerHTML = "";

    lookText.textContent = "There are some birds in the trees..."
}

function lookingAroundCaveOfMagic() {
    const lookText = document.getElementById('look-text');
    lookText.innerHTML = "";

    lookText.textContent = "There is a book on the ground...";
}

function lookingAroundDragonCastle() {
    const lookText = document.getElementById('look-text');
    lookText.innerHTML = "";

    lookText.textContent = "There are two ORCHS guarding the entrance...";
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

// -----FIENDER ATT SKAPA-----
// Dragon
// Evil Wizard
// Orch
// Pack of Wolves