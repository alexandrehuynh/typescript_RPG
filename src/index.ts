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
    'Avatar': ['Air Slices', 'Vacuum Sphere', 'Sonic Boom', 'Rock Bullets', 'Lavabending', 'Seismic Sense', 
            'Fire Jets', 'Lightning Generation', 'Combustion Blast', 'Ice Spears', 'Water Whip', 'Bloodbending'] // Including all moves
};

const defenseMovesByBending = {
    'Airbender': ['Air Shield', 'Flight', 'Spiritual Projection'],
    'Earthbender': ['Earth Wall', 'Metal Armor', 'Sand Cloud'],
    'Firebender': ['Fire Shield', 'Heat Control', 'Lightning Redirection'],
    'Waterbender': ['Healing Waters', 'Spirit Bending', 'Water Shield'],
    'Nonbender': ['Martial Arts', 'Smoke Bombs', 'Shield Use'],
    'Avatar': ['Air Shield', 'Flight', 'Spiritual Projection', 'Earth Wall', 'Metal Armor', 'Sand Cloud', 
            'Fire Shield', 'Heat Control', 'Lightning Redirection', 'Healing Waters', 'Spirit Bending', 'Water Shield'] // Including all moves 
};

const moveSelectsContainer = document.getElementById('move-selects');
const characterBendingSelect = document.getElementById('character-bending') as HTMLSelectElement;

if (moveSelectsContainer && characterBendingSelect) {
    characterBendingSelect.addEventListener('change', () => {
        const characterBending = characterBendingSelect.value; // Get the current value when it changes
        if (['Airbender', 'Earthbender', 'Firebender', 'Waterbender', 'Avatar'].includes(characterBending)) {
            moveSelectsContainer.style.display = 'block';
        } else {
            moveSelectsContainer.style.display = 'none';
        }
    });
}

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

    const nameInput = document.getElementById('character-name') as HTMLInputElement;
    const nationSelect = document.getElementById('nation') as HTMLSelectElement;

    const bendingSelect = document.getElementById('character-bending') as HTMLSelectElement;
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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('character-form') as HTMLFormElement;

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents the default form submission behavior

            const bendingSelect = document.getElementById('character-bending') as HTMLSelectElement;
            const nameInput = document.getElementById('character-name') as HTMLInputElement; // Adjusted to match the HTML
            const nationSelect = document.getElementById('nation') as HTMLSelectElement;
            
            if (bendingSelect && nameInput && nationSelect) {
                const bendingStyle = bendingSelect.value as CharacterBending;
                const name = nameInput.value;
                const nation = nationSelect.value;

                const character = handleCharacterSelection(name, nation, bendingStyle);
                if (character) {
                    console.log('Character created successfully:', character);
                    characterManager.addCharacter(character);
                    console.log('Character created:', character);
                    console.log('All characters:', characterManager.listCharacters());
                } else {
                    console.error("Character creation failed.");
                }
            } else {
                console.error("One or more form elements could not be found.");
            }
        });
    } else {
        console.error('Character form not found');
    }
    // Handling move selections visibility based on bending type
    const characterBendingSelect = document.getElementById('character-bending') as HTMLSelectElement;
    const moveSelectsContainer = document.getElementById('move-selects');

    if (characterBendingSelect && moveSelectsContainer) {
        characterBendingSelect.addEventListener('change', () => {
            const characterBending = characterBendingSelect.value as CharacterBending;
            // Adjusting move selections visibility...
            if (['Airbender', 'Earthbender', 'Firebender', 'Waterbender', 'Avatar'].includes(characterBending)) {
                moveSelectsContainer.style.display = 'block';
            } else {
                moveSelectsContainer.style.display = 'none';
            }
        });

        // Initially set move selections based on the default or initial character bending type
        const initialCharacterBending = characterBendingSelect.value as CharacterBending;
        populateNations(initialCharacterBending);
        // Additional initialization logic...
    } else {
        console.error("Required elements for bending and move selections were not found.");
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
