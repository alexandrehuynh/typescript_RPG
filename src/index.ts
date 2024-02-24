import Avatar from './character/Avatar';
import Airbender from './character/Airbender';
import Earthbender from './character/Earthbender';
import Firebender from './character/Firebender';
import Waterbender from './character/Waterbender';
import Nonbender from './character/Nonbender';
import DOMHandler from './DomHandler';
import CharacterManager from './CharacterManager';


let avatarInstance: Avatar | null = null;

// Define CharacterBending outside of any function
type CharacterBending = 'Airbender' | 'Earthbender' | 'Firebender' | 'Waterbender' | 'Nonbender' | 'Avatar';

function populateNations(characterBending: CharacterBending) {

    const nationSelect = document.getElementById('nation') as HTMLSelectElement;
    if (!nationSelect) {
        console.error('nation select element not found'); // Error if the element is not found
        return;
    }
    
    nationSelect.innerHTML = ''; // Clear existing options

    const nationsByBending = {
        'Airbender': ['Air Temples', 'Republic City'],
        'Earthbender': ['Earth Kingdom', 'Republic City'],
        'Firebender': ['Fire Nation', 'Republic City'],
        'Waterbender': ['Water Tribes', 'Republic City'],
        'Nonbender': ['Republic City', 'Earth Kingdom', 'Fire Nation', 'Air Temples', 'Water Tribes'],
        'Avatar': ['Republic City', 'Earth Kingdom', 'Fire Nation', 'Air Temples', 'Water Tribes']
    };

    const nations = nationsByBending[characterBending] || [];
    nations.forEach((nation: string) => {
        const option = document.createElement('option');
        option.value = nation;
        option.textContent = nation;
        nationSelect.appendChild(option);
    });
}

// Function to handle character selection
function handleCharacterSelection(name: string, nation: string, bendingStyle: CharacterBending) {
    console.log(`Handling character selection - Name: ${name}, Nation: ${nation}, Bending Style: ${bendingStyle}`);
    let character = null;

    switch (bendingStyle) {
        case 'Airbender':
            character = new Airbender(name, nation, [], []);
            break;
        case 'Earthbender':
            character = new Earthbender(name, nation, [], []);
            break;
        case 'Firebender':
            character = new Firebender(name, nation, [], []);
            break;
        case 'Waterbender':
            character = new Waterbender(name, nation, [], []);
            break;
        case 'Nonbender':
            character = new Nonbender(name, nation, [], []);
            break;
        case 'Avatar':
            if (!avatarInstance) {
                avatarInstance = Avatar.getInstance(name, nation, bendingStyle, [], []);
                character = avatarInstance;
            } else {
                console.error('An Avatar already exists.');
                return null; // Return null to indicate failure
            }
            break;
    }

    const avatarStateSection = document.getElementById('avatar-state-section');
    if (avatarStateSection) {
        avatarStateSection.style.display = bendingStyle === "Avatar" ? 'block' : 'none';
    } else {
        console.error('Avatar state section element not found.');
    }

    if (character) {
        console.log('Updating UI with the created character');
        DOMHandler.displayCharacter(character, 'character-display');
        console.log('UI should be updated now');
    }

    // After character creation, call functions to handle learning moves
    showOffenseMoves(bendingStyle);
    showDefenseMoves(bendingStyle);

    return character; // Ensure this function returns the created character or null
}
  
// Define available moves for each character bending
const offenseMovesByBending = {
    'Airbender': ['Air Slices', 'Vacuum Sphere', 'Sonic Boom'],
    'Earthbender': ['Rock Bullets', 'Lavabending', 'Seismic Sense'],
    'Firebender': ['Fire Jets', 'Lightning Generation', 'Combustion Blast'],
    'Waterbender': ['Ice Spears', 'Water Whip', 'Bloodbending'],
    'Nonbender': ['Chi Blocking', 'Swordsmanship', 'Electrified Weapons'],
    'Avatar': ['Air Slices', 'Rock Bullets', 'Fire Jets', 'Ice Spears'] // Including all moves
};

const defenseMovesByBending = {
    'Airbender': ['Air Shield', 'Flight', 'Spiritual Projection'],
    'Earthbender': ['Earth Wall', 'Metal Armor', 'Sand Cloud'],
    'Firebender': ['Fire Shield', 'Heat Control', 'Lightning Redirection'],
    'Waterbender': ['Healing Waters', 'Spirit Bending', 'Water Shield'],
    'Nonbender': ['Martial Arts', 'Smoke Bombs', 'Shield Use'],
    'Avatar': ['Air Shield', 'Earth Wall', 'Fire Shield', 'Water Shield'] // Including all moves 
};

function showOffenseMoves(characterBending: CharacterBending) {
    const offenseMoveSelect = document.getElementById('offense-moves') as HTMLSelectElement;
    offenseMoveSelect.innerHTML = ''; // Clear existing options
    const moves = offenseMovesByBending[characterBending] ?? []; // Correctly indexed with CharacterBending

    moves.forEach((move: string) => {
        const option = document.createElement('option');
        option.value = move;
        option.textContent = move;
        offenseMoveSelect.appendChild(option);
    });
}


function showDefenseMoves(characterBending: CharacterBending) {
    const defenseMoveSelect = document.getElementById('defense-moves') as HTMLSelectElement;
    defenseMoveSelect.innerHTML = ''; // Clear existing options
    const moves = defenseMovesByBending[characterBending] ?? []; // Correctly indexed with CharacterBending

    moves.forEach((move: string) => {
        const option = document.createElement('option');
        option.value = move;
        option.textContent = move;
        defenseMoveSelect.appendChild(option);
    });
}

// get character bending
document.getElementById('character-bending')?.addEventListener('change', (e) => {
    const selectElement = e.target as HTMLSelectElement;
    const characterBending = selectElement.value as CharacterBending;
    populateNations(characterBending);
});

// create character button
const characterManager = new CharacterManager();

// Adjusted event listener for character creation
document.getElementById('create-character-btn')?.addEventListener('click', (e) => {
    
    console.log('Create character button clicked');
    e.preventDefault(); // Prevent form from submitting traditionally, which refreshes the page

    const bendingSelect = document.getElementById('character-bending') as HTMLSelectElement; // Corrected ID to 'character-bending'
    
    const nameInput = document.getElementById('character-name-input') as HTMLInputElement;
    const nationSelect = document.getElementById('nation') as HTMLSelectElement;
    const bendingStyle = bendingSelect.value as CharacterBending;
    console.log(`Form values - Name: ${nameInput.value}, Nation: ${nationSelect.value}, Bending Style: ${bendingStyle}`);
    

    // Call handleCharacterSelection with the corrected arguments
    const character = handleCharacterSelection(nameInput.value, nationSelect.value, bendingStyle);
    if (character) {
        console.log('Character created successfully:', character);
    } else {
        console.log('Failed to create character');
    }
    if (character) {
        characterManager.addCharacter(character);
        console.log('Character created:', character);
        console.log('All characters:', characterManager.listCharacters());
        console.log('After adding, characters list:', characterManager.listCharacters());
    } else {
        console.error("Character creation failed.");
    }
});


// After the document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    const characterBendingSelect = document.getElementById('character-bending') as HTMLSelectElement;

    // Check if characterBendingSelect is not null
    if (!characterBendingSelect) {
        console.error('Character Bending select element not found');
        return;
    }

    // Get the initial character bending from the select element
    const initialCharacterBending = characterBendingSelect.value as CharacterBending;

    // Populate nations for the initial character bending
    populateNations(initialCharacterBending);

    characterBendingSelect.value = 'Avatar'; // Set default to Avatar
    populateNations('Avatar'); // Populate nations for Avatar
});
