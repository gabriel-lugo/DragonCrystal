window.addEventListener('DOMContentLoaded', main);

//-----HTML-ELEMENTS-----

/** @type{HtmlElement} - Html-Element used for text. */
let text;
/** @type{HtmlElement} - Html-Element used for action-text. */
let actionText;
/** @type{HTMLElement} - Button for north-navigation. */
let north;
/** @type{HTMLElement} - Button for south-navigation. */
let south;
/** @type{HTMLElement} - Button for west-navigation. */
let west;
/** @type{HTMLElement} - Button for east-navigation. */
let east;
/** @type{HTMLElement} - Button for looking around in scenes. */
let look;
/** @type{HTMLElement} - Button for talking in the scenes. */
let talk;
/** @type{HTMLElement} - Button for using or taking items. */
let useOrTake;

//-----ITEMS-----

/** @type{Boolean} - SPELLBOOK-item */
let spellBook;
/** @type{Boolean} - INVISIBILITYCLOAK-item */
let invisibilityCloak;
/** @type{Boolean} - DRAGONCRYSTAL-item */
let dragonCrystal;

//-----CHARACTERS-----

/** @type{Boolean} - WIZARD-character */
let sadWizard;

//-----STARTUP-----

/** Start of the program. */
function main() {
    loadHtmlElements();
    loadItems();
    startup();
}

/** Loading HTML-elements. */
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

/** Loading items and characters. */
function loadItems() {
    spellBook = false;
    invisibilityCloak = false;
    dragonCrystal = false;
    sadWizard = true;
}

// -----THE SCENES-----

/** Loads STARTUP-scene. */
function startup() {
    text.textContent = "Welcome to the world of Imaginaria!";
    actionText.innerHTML = "Press any button";
    north.onclick = loadFrozenLakeScene;
    south.onclick = loadFrozenLakeScene;
    west.onclick = loadFrozenLakeScene;
    east.onclick = loadFrozenLakeScene;
    look.onclick = loadFrozenLakeScene;
    talk.onclick = loadFrozenLakeScene;
    useOrTake.onclick = loadFrozenLakeScene;
}

/** Loads FROZENLAKE scene. */
function loadFrozenLakeScene() {
    text.textContent = "You are standing by a Frozen Lake";
    actionText.innerHTML = "";
    north.onclick = loadSolemnVillageScene;
    south.onclick = cannotGoSouth;
    west.onclick = loadNarrowPath;
    east.onclick = cannotGoEast;
    look.onclick = lookingAroundFrozenLake;
    talk.onclick = nobodyToTalkTo;
    useOrTake.onclick = nothingToUse;
}

/** Loads NARROWPATH scene. */
function loadNarrowPath() {
    text.textContent = "You are on a Narrow Path";
    actionText.innerHTML = "";
    north.onclick = loadCaveOfMagicScene;
    south.onclick = cannotGoSouth;
    west.onclick = cannotGoWest;
    east.onclick = loadFrozenLakeScene;
    look.onclick = lookingAroundNarrowPath;
    talk.onclick = nobodyToTalkTo;
    useOrTake.onclick = nothingToUse;
}

/** Loads SOLEMNVILLAGE scene. */
function loadSolemnVillageScene() {
    text.textContent = "You are in the Solemn Village";
    actionText.innerHTML = "";
    north.onclick = loadEnchantedForestScene;
    south.onclick = loadFrozenLakeScene;
    west.onclick = cannotGoWest;
    east.onclick = cannotGoEast;
    look.onclick = lookingAroundSolemnVillage;
    talk.onclick = nobodyToTalkTo;
    useOrTake.onclick = nothingToUse;
}

/** Loads NARROWPATH scene. */
function loadEnchantedForestScene() {
    text.textContent = "You are in the Enchanted Forest";
    actionText.innerHTML = "";
    north.onclick = loadOutsideDragonCastleScene;
    south.onclick = loadSolemnVillageScene;
    west.onclick = loadCaveOfMagicScene;
    east.onclick = cannotGoEast;
    look.onclick = lookingAroundEnchantedForest
    talk.onclick = nobodyToTalkTo;
    useOrTake.onclick = nothingToUse;
}

/** Loads CAVEOFMAGIC scene. */
function loadCaveOfMagicScene() {
    text.textContent = "You are in the Cave of Magic";
    actionText.innerHTML = "";
    north.onclick = cannotGoNorth;
    south.onclick = loadNarrowPath;
    west.onclick = cannotGoWest;
    east.onclick = loadEnchantedForestScene;
    look.onclick = lookingAroundCaveOfMagic;
    talk.onclick = nobodyToTalkTo;
    useOrTake.onclick = nothingToUse;
}

/** Loads OUTSIDEDRAGONCASTLE scene. */
function loadOutsideDragonCastleScene() {
    text.textContent = "You are outside the DragonCastle";
    actionText.innerHTML = "";
    north.onclick = cannotGoNorth;
    south.onclick = loadEnchantedForestScene;
    west.onclick = cannotGoWest;
    east.onclick = cannotGoEast;
    look.onclick = lookingAroundOutsideDragonCastle;
    talk.onclick = nobodyToTalkTo;
    useOrTake.onclick = nothingToUse;
}

/** Loads INSIDEDRAGONCASTLE scene. */
function loadInsideDragonCastleScene() {
    text.textContent = "You are inside the DragonCastle";
    actionText.innerHTML = "";
    north.onclick = cannotGoNorth;
    south.onclick = cannotGoSouth;
    west.onclick = cannotGoWest;
    east.onclick = cannotGoEast;
    look.onclick = lookingAroundInsideDragonCastle;
    talk.onclick = nobodyToTalkTo;
    useOrTake.onclick = nothingToUse;
}

// -----DIRECTIONS----

/** Used when player cannot go north. */
function cannotGoNorth() {
    actionText.innerHTML = "";
    actionText.textContent = "Cannot go NORTH from here";
}

/** Used when player cannot go south. */
function cannotGoSouth() {
    actionText.innerHTML = "";
    actionText.textContent = "Cannot go SOUTH from here";
}

/** Used when player cannot go west. */
function cannotGoWest() {
    actionText.innerHTML = "";
    actionText.textContent = "Cannot go WEST from here";
}

/** Used when player cannot go east. */
function cannotGoEast() {
    actionText.innerHTML = "";
    actionText.textContent = "Cannot go EAST from here";
}

// -----LOOKING AROUND-----

/** For looking around FROZENLAKE scene.
 * You can talk to the WIZARD here.
 * If you have the SPELLBOOK you can give it to the WIZARD.  */
function lookingAroundFrozenLake() {
    actionText.innerHTML = "";

    if(sadWizard == true){
    actionText.textContent = "There is a SAD WIZARD here";
    talk.onclick = talkToWizard;
    useOrTake.onclick = nothingToUse;

        if(spellBook == true) {
            useOrTake.onclick = giveSpellBookToWizard;
        } else {
            useOrTake.onclick = nothingToUse;
        }
    } else{
        actionText.textContent = "There is a HAPPY WIZARD here";
        talk.onclick = talkToHappyWizard;
        useOrTake.onclick = nothingToUse;
    }
}

/** For looking around NARROWPATH scene. */
function lookingAroundNarrowPath() {
    actionText.innerHTML = "";
    actionText.textContent = "This is a dark and dangerous path"
    talk.onclick = nobodyToTalkTo;
    useOrTake.onclick = nothingToUse;
}

/** For looking around SOLEMNVILLAGE scene.
 * You can talk to the BLACKSMITH here.
 */
function lookingAroundSolemnVillage() {
    actionText.innerHTML = "";
    actionText.textContent = "There is a BLACKSMITH here";
    talk.onclick = talkToBlacksmith;
    useOrTake.onclick = nothingToUse;
}

/** For looking around ENCHANTEDFOREST scene. */
function lookingAroundEnchantedForest() {
    actionText.innerHTML = "";
    actionText.textContent = "There are some birds in the trees"
    talk.onclick = nobodyToTalkTo;
    useOrTake.onclick = nothingToUse;
}

/** Used for looking around CAVEOFMAGIC scene.
 * You can pick up the SPELLBOOK here. */
function lookingAroundCaveOfMagic() {
    actionText.innerHTML = "";

    if(spellBook == false) {
        actionText.textContent = "There is a book on the ground";
        talk.onclick = nobodyToTalkTo;
        useOrTake.onclick = pickUpSpellBook;
    } else {
        actionText.textContent = "There is nothing here";
        useOrTake.onclick = nothingToUse;
    }
}

/** Used for looking around OUTSIDEDRAGONCASTLE scene. 
 * You can talk to the ORC.
 * If you have the INVISIBILITYCLOAK you can use that here. */
function lookingAroundOutsideDragonCastle() {
    actionText.innerHTML = "";
    actionText.textContent = "There is an ORC guarding the entrance";
    talk.onclick = talkToOrc;
    useOrTake.onclick = nothingToUse;
    if (invisibilityCloak == true) {
        useOrTake.onclick = useInvisibilityCloak;
    } else {
        useOrTake.onclick = nothingToUse;
    }
}

/** Used for looking around INSIDEDRAGONCASTLE scene.
 * You can pick up the DRAGONCRYSTAL here.
 */
function lookingAroundInsideDragonCastle() {
    actionText.innerHTML = "";
    actionText.textContent = "The DRAGONCRYSTAL is glowing bright";
    useOrTake.onclick = endGame;
}

// -----TALK-----

/** Used when there is nobody to talk to. */
function nobodyToTalkTo() {
    actionText.innerHTML = "";
    actionText.textContent = "Nobody to talk to"
}

/** First conversation with the WIZARD at FROZENLAKE. 
 * If you have the SPELLBOOK you can give it to him.
*/
function talkToWizard() {
    actionText.innerHTML = "";

    if(spellBook == true) {
        actionText.textContent = "WIZARD: I have lost my SPELL BOOK...";
        useOrTake.onclick = giveSpellBookToWizard;
    } else {
        actionText.textContent = "WIZARD: I have lost my SPELL BOOK...";
        useOrTake.onclick = nothingToUse;
    }
}

/** Conversation with WIZARD when you give him the SPELLBOOK.
 * WIZARD is no longer sad.
 */
function talkToWizardAgain() {
    actionText.textContent = "WIZARD: Thank you for finding my SPELL BOOK! Please take this INVISIBILITY CLOAK!";
    sadWizard = false;
    setTimeout(getInvisibilityCloak, 3500);
}

/** Conversation with WIZARD after you have given him the SPELLBOOK. */
function talkToHappyWizard() {
    actionText.innerHTML = "";
    actionText.textContent = "WIZARD: Good luck on your quest!";
    useOrTake.onclick = nothingToUse;
}

/** Conversation with BLACKSMITH in SOLEMNVILLAGE. */
function talkToBlacksmith() {
    actionText.innerHTML = "";
    actionText.textContent = "BLACKSMITH: I can make something from something else!";
    useOrTake.onclick = nothingToUse;
}

/** Conversation with ORC at OUTSIDEDRAGONCASTLE.
 * This leads to GAMEOVER scene.*/
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
    setTimeout(gameOver, 1500);
}

// -----USE/TAKE-----

/** When there is nothing to use in the scene. */
function nothingToUse() {
    actionText.innerHTML = "";
    actionText.textContent = "Nothing to use"
    useOrTake.onclick = "";
}

/** Picks up SPELLBOOK in CAVEOFMAGIC scene. */
function pickUpSpellBook() {
    actionText.innerHTML = "";
    actionText.textContent = "You picked up the SPELL BOOK";
    spellBook = true;  
}

/** Gives SPELLBOOK to WIZARD. */
function giveSpellBookToWizard() {
    north.onclick = "";
    south.onclick = "";
    west.onclick = "";
    east.onclick = "";
    look.onclick = "";
    talk.onclick = "";
    useOrTake.onclick = "";
    actionText.innerHTML = "";
    actionText.textContent = "You give SPELL BOOK to WIZARD";
    setTimeout(talkToWizardAgain, 1500);
    useOrTake.onclick = "";
}

/** Gets INVISIBILITYCLOAK from WIZARD. */
function getInvisibilityCloak() {
    north.onclick = loadSolemnVillageScene;
    south.onclick = loadFrozenLakeScene;
    west.onclick = loadNarrowPath;
    east.onclick = loadFrozenLakeScene;
    look.onclick = lookingAroundFrozenLake;
    talk.onclick = talkToHappyWizard;
    useOrTake.onclick = "";
    invisibilityCloak = true;
    actionText.innerHTML= "";
    actionText.textContent = "You recieve INVISIBILITY CLOAK"
}

/** Uses INVISIBILITYCLOAK in OUTSIDEDRAGONCASTLE. */
function useInvisibilityCloak() {
    north.onclick = "";
    south.onclick = "";
    west.onclick = "";
    east.onclick = "";
    look.onclick = "";
    talk.onclick = "";
    useOrTake.onclick = "";
    actionText.innerHTML = "";
    actionText.innerHTML = "";
    actionText.textContent = "You put on the INVISIBILITY CLOAK and sneak by the ORC";
    setTimeout(loadInsideDragonCastleScene, 2000)
}

//-----ENDINGS-----

/** When you finish the game. */
function endGame() {
    north.onclick = "";
    south.onclick = "";
    west.onclick = "";
    east.onclick = "";
    look.onclick = "";
    talk.onclick = "";
    useOrTake.onclick = "";
    text.textContent = "Congratulations! You found the DragonCrystal"
    actionText.textContent = "This is the end of Chapter 1"
}

/** Shows GAMEOVER-scene */
function gameOver() {
    north.onclick = "";
    south.onclick = "";
    west.onclick = "";
    east.onclick = "";
    look.onclick = "";
    talk.onclick = "";
    useOrTake.onclick = "";
    text.textContent = "You died";
    actionText.innerHTML = "";
}