window.addEventListener('DOMContentLoaded', main);

/** HTML-element som används i programmet */
let username;
let text;
let actionText;
let north;
let south;
let west;
let east;
let look;
let talk;
let useOrTake;
let inventory;

/** Startar programmet */
function main() {
    loadHtmlElements();
    startup();
}

function loadHtmlElements() {
    text = document.getElementById('world-text');
    actionText = document.getElementById('action-text');
    north = document.getElementById('north');
    south = document.getElementById('south');
    west = document.getElementById('west');
    east = document.getElementById('east');
    look = document.getElementById('look');
    talk = document.getElementById('talk');
    useOrTake = document.getElementById('use-take');
    inventory = document.getElementById('inventory');
}

// -----SCENES-----
function startup() {

    text.textContent = "Welcome to the world of Imaginaria! Your goal is to get the DragonCrystal and use it to save the world.";
    actionText.innerHTML = "Good luck...";
    north.onclick = loadFrozenLakeScene;
    south.onclick = loadFrozenLakeScene;
    west.onclick = loadFrozenLakeScene;
    east.onclick = loadFrozenLakeScene;
    look.onclick = loadFrozenLakeScene;
}


function loadFrozenLakeScene() {
    text.textContent = "You are standing by a Frozen Lake.";
    actionText.innerHTML = "";
    north.onclick = loadSolemnVillageScene;
    south.onclick = loadFrozenLakeScene;
    west.onclick = loadNarrowPath;
    east.onclick = loadFrozenLakeScene;
    look.onclick = lookingAroundFrozenLake;
}

function loadNarrowPath() {
    text.textContent = "You are on a Narrow Path.";
    actionText.innerHTML = "";
    north.onclick = loadCaveOfMagicScene;
    south.onclick = loadNarrowPath;
    west.onclick = loadNarrowPath;
    east.onclick = loadFrozenLakeScene;
    look.onclick = lookingAroundNarrowPath;
}


function loadSolemnVillageScene() {
    text.textContent = "You are in the Solemn Village.";
    actionText.innerHTML = "";
    north.onclick = loadEnchantedForestScene;
    south.onclick = loadFrozenLakeScene;
    west.onclick = loadSolemnVillageScene;
    east.onclick = loadSolemnVillageScene;
    look.onclick = lookingAroundSolemnVillage;
}

function loadEnchantedForestScene() {
    text.textContent = "You are in the Enchanted Forest.";
    actionText.innerHTML = "";
    north.onclick = loadDragonCastleScene;
    south.onclick = loadSolemnVillageScene;
    west.onclick = loadCaveOfMagicScene;
    east.onclick = loadEnchantedForestScene;
    look.onclick = lookingAroundEnchantedForest;
}

function loadCaveOfMagicScene() {
    text.textContent = "You are in the Cave of Magic.";
    actionText.innerHTML = "";
    north.onclick = loadCaveOfMagicScene;
    south.onclick = loadCaveOfMagicScene;
    west.onclick = loadCaveOfMagicScene;
    east.onclick = loadEnchantedForestScene;
    look.onclick = lookingAroundCaveOfMagic;
}

function loadDragonCastleScene() {
    text.textContent = "You are outside the DragonCastle.";
    actionText.innerHTML = "";
    north.onclick = loadDragonCastleScene;
    south.onclick = loadEnchantedForestScene;
    west.onclick = loadDragonCastleScene;
    east.onclick = loadDragonCastleScene;
    look.onclick = lookingAroundDragonCastle;
}

// -----LOOKING AROUND-----
function lookingAroundFrozenLake() {
    actionText.innerHTML = "";
    actionText.textContent = "There is a WIZARD here...";
    talk.onclick = talkToWizard;
}

function lookingAroundNarrowPath() {
    actionText.innerHTML = "";
    actionText.textContent = "This is a dark and dangerous path..."
    talk.onclick = "";
}

function lookingAroundSolemnVillage() {
    actionText.innerHTML = "";
    actionText.textContent = "There is a BLACKSMITH here...";
    talk.onclick = talkToBlacksmith;
}

function lookingAroundEnchantedForest() {
    actionText.innerHTML = "";
    actionText.textContent = "There are some birds in the trees..."
}

function lookingAroundCaveOfMagic() {
    actionText.innerHTML = "";
    actionText.textContent = "There is a book on the ground...";
    useOrTake.onclick = pickUpMagicBook;
}

function lookingAroundDragonCastle() {
    actionText.innerHTML = "";
    actionText.textContent = "There is a ORC guarding the entrance...";
    talk.onclick = talkToOrc;
}

// -----TALK-----
function talkToWizard() {
    actionText.innerHTML = "";
    actionText.textContent = "WIZARD: I have lost my SPELL BOOK..."
}

function talkToBlacksmith() {
    actionText.innerHTML = "";
    actionText.textContent = "BLACKSMITH: If I had the DRAGONCRYSTAL I could forge a sword mightier than anything..."
}

function talkToOrc() {
    actionText.innerHTML = "";
    actionText.textContent = "ORC: Za kul the dautus lat mat!";
    north.onclick = gameOver;
    south.onclick = gameOver;
    west.onclick = gameOver;
    east.onclick = gameOver;
    look.onclick = gameOver;
}


// -----USE/TAKE-----
function pickUpMagicBook() {


}

function gameOver() {
    text.textContent = "You died";
    actionText.innerHTML = "";
    north.onclick = gameOver;
    south.onclick = gameOver;
    west.onclick = gameOver;
    east.onclick = gameOver;
    look.onclick = gameOver;
}