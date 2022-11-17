window.addEventListener('DOMContentLoaded', main);

let text;
let lookText;
let north;
let south;
let west;
let east;
let look;

function main() {
    loadHtmlElements();
    loadFrozenLakeScene();
}

function loadHtmlElements() {
    text = document.getElementById('world-text');
    lookText = document.getElementById('look-text');
    north = document.getElementById('north');
    south = document.getElementById('south');
    west = document.getElementById('west');
    east = document.getElementById('east');
    look = document.getElementById('look-around');
}

// -----SCENES-----

function loadFrozenLakeScene() {
    text.textContent = "You are standing by the Frozen Lake.";
    lookText.innerHTML = "";
    north.onclick = loadSolemnVillageScene;
    south.onclick = loadFrozenLakeScene;
    west.onclick = loadFrozenLakeScene;
    east.onclick = loadFrozenLakeScene;
    look.onclick = lookingAroundFrozenLake;
}

function loadSolemnVillageScene() {
    text.textContent = "You are in the Solemn Village.";
    lookText.innerHTML = "";
    north.onclick = loadEnchantedForestScene;
    south.onclick = loadFrozenLakeScene;
    west.onclick = loadSolemnVillageScene;
    east.onclick = loadSolemnVillageScene;
    look.onclick = lookingAroundSolemnVillage;
}

function loadEnchantedForestScene() {
    text.textContent = "You are in the Enchanted Forest.";
    lookText.innerHTML = "";
    north.onclick = loadDragonCastleScene;
    south.onclick = loadSolemnVillageScene;
    west.onclick = loadCaveOfMagicScene;
    east.onclick = loadEnchantedForestScene;
    look.onclick = lookingAroundEnchantedForest;
}

function loadCaveOfMagicScene() {
    text.textContent = "You are in the Cave of Magic.";
    lookText.innerHTML = "";
    north.onclick = loadCaveOfMagicScene;
    south.onclick = loadCaveOfMagicScene;
    west.onclick = loadCaveOfMagicScene;
    east.onclick = loadEnchantedForestScene;
    look.onclick = lookingAroundCaveOfMagic;
}

function loadDragonCastleScene() {
    text.textContent = "You are outside the DragonCastle.";
    lookText.innerHTML = "";
    north.onclick = loadDragonCastleScene;
    south.onclick = loadEnchantedForestScene;
    west.onclick = loadDragonCastleScene;
    east.onclick = loadDragonCastleScene;
    look.onclick = lookingAroundDragonCastle;
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