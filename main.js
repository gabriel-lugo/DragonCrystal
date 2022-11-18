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

let spellBook;
let invisibilityCloak;
let dragonCrystal;

/** Startar programmet */
function main() {
    loadHtmlElements();
    loadItems();
    startup();
    console.log("spellbook"+":"+spellBook);
    console.log("invisibilitycloak"+":"+invisibilityCloak);
    console.log("dragoncrystal" + ":" + dragonCrystal);
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

function loadItems() {
    spellBook = false;
    invisibilityCloak = false;
    dragonCrystal = false;
}

// -----SCENES-----
function startup() {

    text.textContent = "Welcome to the world of Imaginaria!";
    actionText.innerHTML = "Press any button";
    north.onclick = loadFrozenLakeScene;
    south.onclick = loadFrozenLakeScene;
    west.onclick = loadFrozenLakeScene;
    east.onclick = loadFrozenLakeScene;
    look.onclick = loadFrozenLakeScene;
    useOrTake.onclick = loadFrozenLakeScene;
    inventory.onclick = loadFrozenLakeScene;
}


function loadFrozenLakeScene() {
    text.textContent = "You are standing by a Frozen Lake.";
    actionText.innerHTML = "";
    north.onclick = loadSolemnVillageScene;
    south.onclick = loadFrozenLakeScene;
    west.onclick = loadNarrowPath;
    east.onclick = loadFrozenLakeScene;
    look.onclick = lookingAroundFrozenLake;
    talk.onclick = "";
    useOrTake.onclick = "";
}

function loadNarrowPath() {
    text.textContent = "You are on a Narrow Path.";
    actionText.innerHTML = "";
    north.onclick = loadCaveOfMagicScene;
    south.onclick = loadNarrowPath;
    west.onclick = loadNarrowPath;
    east.onclick = loadFrozenLakeScene;
    look.onclick = lookingAroundNarrowPath;
    talk.onclick = "";
    useOrTake.onclick = "";
}


function loadSolemnVillageScene() {
    text.textContent = "You are in the Solemn Village.";
    actionText.innerHTML = "";
    north.onclick = loadEnchantedForestScene;
    south.onclick = loadFrozenLakeScene;
    west.onclick = loadSolemnVillageScene;
    east.onclick = loadSolemnVillageScene;
    look.onclick = lookingAroundSolemnVillage;
    talk.onclick = "";
    useOrTake.onclick = "";
}

function loadEnchantedForestScene() {
    text.textContent = "You are in the Enchanted Forest.";
    actionText.innerHTML = "";
    north.onclick = loadDragonCastleScene;
    south.onclick = loadSolemnVillageScene;
    west.onclick = loadCaveOfMagicScene;
    east.onclick = loadEnchantedForestScene;
    talk.onclick = "";
    useOrTake.onclick = "";
}

function loadCaveOfMagicScene() {
    text.textContent = "You are in the Cave of Magic.";
    actionText.innerHTML = "";
    north.onclick = loadCaveOfMagicScene;
    south.onclick = loadNarrowPath;
    west.onclick = loadCaveOfMagicScene;
    east.onclick = loadEnchantedForestScene;
    look.onclick = lookingAroundCaveOfMagic;
    talk.onclick = "";
    useOrTake.onclick = "";
}

function loadDragonCastleScene() {
    text.textContent = "You are outside the DragonCastle.";
    actionText.innerHTML = "";
    north.onclick = loadDragonCastleScene;
    south.onclick = loadEnchantedForestScene;
    west.onclick = loadDragonCastleScene;
    east.onclick = loadDragonCastleScene;
    look.onclick = lookingAroundDragonCastle;
    talk.onclick = "";
    useOrTake.onclick = "";
}

// -----LOOKING AROUND-----
function lookingAroundFrozenLake() {
    actionText.innerHTML = "";
    actionText.textContent = "There is a WIZARD here...";
    talk.onclick = talkToWizard;
    useOrTake.onclick = "";
}

function lookingAroundNarrowPath() {
    actionText.innerHTML = "";
    actionText.textContent = "This is a dark and dangerous path..."
    talk.onclick = "";
    useOrTake.onclick = "";
}

function lookingAroundSolemnVillage() {
    actionText.innerHTML = "";
    actionText.textContent = "There is a BLACKSMITH here...";
    talk.onclick = talkToBlacksmith;
    useOrTake.onclick = "";
}

function lookingAroundEnchantedForest() {
    actionText.innerHTML = "";
    actionText.textContent = "There are some birds in the trees..."
    talk.onclick = "";
    useOrTake.onclick = "";
}

function lookingAroundCaveOfMagic() {
    actionText.innerHTML = "";

    if(spellBook == false) {
        actionText.textContent = "There is a book on the ground...";
        talk.onclick = "";
        useOrTake.onclick = pickUpMagicBook;
    } else {
        actionText.textContent = "There is nothing here...";
        useOrTake.onclick = "";
    }
}

function lookingAroundDragonCastle() {
    actionText.innerHTML = "";
    actionText.textContent = "There is a ORC guarding the entrance...";
    talk.onclick = talkToOrc;
    useOrTake.onclick = "";
}

// -----TALK-----
function talkToWizard() {
    actionText.innerHTML = "";

    if(spellBook == true) {
        actionText.textContent = "WIZARD: I have lost my SPELL BOOK..."
        useOrTake.onclick = giveSpellBookToWizard;
    } else {
        actionText.textContent = "WIZARD: I have lost my SPELL BOOK..."
        useOrTake.onclick = "";
    }
}

function talkToBlacksmith() {
    actionText.innerHTML = "";
    actionText.textContent = "BLACKSMITH: If I had the DRAGONCRYSTAL I could forge a sword mightier than anything..."
    useOrTake.onclick = "";
}

function talkToOrc() {
    actionText.innerHTML = "";
    actionText.textContent = "ORC: Za kul the dautus lat mat!";
    north.onclick = gameOver;
    south.onclick = gameOver;
    west.onclick = gameOver;
    east.onclick = gameOver;
    look.onclick = gameOver;
    talk.onclick = gameOver;
    useOrTake.onclick = gameOver;
}


// -----USE/TAKE-----
function pickUpMagicBook() {
    actionText.innerHTML = "";
    actionText.textContent = "You picked up the SPELL BOOK";
    spellBook = true;
    console.log("spellbook"+":"+spellBook);
   
}

function giveSpellBookToWizard() {
    actionText.innerHTML = "";
    actionText.textContent = "You give SPELL BOOK to WIZARD";
    setTimeout(getInvisibilityCloak, 1000);
}

function getInvisibilityCloak() {
    invisibilityCloak = true;
    console.log("invisibilitycloak"+":"+invisibilityCloak);
    actionText.innerHTML= "";
    actionText.textContent = "You recieve INVISIBILITY CLOAK."
}

function gameOver() {
    text.textContent = "You died";
    actionText.innerHTML = "";
    north.onclick = gameOver;
    south.onclick = gameOver;
    west.onclick = gameOver;
    east.onclick = gameOver;
    look.onclick = gameOver;
    talk.onclick = gameOver;
    useOrTake.onclick = gameOver;
}