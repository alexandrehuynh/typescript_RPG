import Avatar from './character/Avatar';
import Airbender from './character/Airbender';
import Earthbender from './character/Earthbender';
import Firebender from './character/Firebender';
import Waterbender from './character/Waterbender';
import Nonbender from './character/Nonbender';
import DOMHandler from './DomHandler';

let avatarInstance: Avatar | null = null;

// Define CharacterType outside of any function
type CharacterType = 'Airbender' | 'Earthbender' | 'Firebender' | 'Waterbender' | 'Nonbender' | 'Avatar';

function populateNations(characterType: CharacterType) {
    console.log(`populateNations called with characterType: ${characterType}`); // 1. Start of function

    const nationSelect = document.getElementById('nation') as HTMLSelectElement;
    if (!nationSelect) {
        console.error('nation select element not found'); // Error if the element is not found
        return;
    }
    
    nationSelect.innerHTML = ''; // Clear existing options
    console.log('Cleared nationSelect options'); // 2. After fetching nationSelect

    const nationsByType = {
        'Airbender': ['Air Temples', 'Republic City'],
        'Earthbender': ['Earth Kingdom', 'Republic City'],
        'Firebender': ['Fire Nation', 'Republic City'],
        'Waterbender': ['Water Tribes', 'Republic City'],
        'Nonbender': ['Republic City', 'Earth Kingdom', 'Fire Nation', 'Air Temples', 'Water Tribes'],
        'Avatar': ['Republic City', 'Earth Kingdom', 'Fire Nation', 'Air Temples', 'Water Tribes']
    };

    const nations = nationsByType[characterType] || [];
    nations.forEach((nation: string) => {
        console.log(`Adding nation: ${nation}`); // 3. Inside forEach loop
        const option = document.createElement('option');
        option.value = nation;
        option.textContent = nation;
        nationSelect.appendChild(option);
    });
}

// Function to handle character selection
function handleCharacterSelection(type: string, name: string, nation: string, bendingStyle: string) {

    let character = null;

    switch (type) {
        case 'Airbender':
            character = new Airbender(name, nation === 'Republic City' ? nation : 'Air Temples', [], []);
            break;
        case 'Earthbender':
            character = new Earthbender(name, nation === 'Republic City' ? nation : 'Earth Kingdom', [], []);
            break;
        case 'Firebender':
            character = new Firebender(name, nation === 'Republic City' ? nation : 'Fire Nation', [], []);
            break;
        case 'Waterbender':
            character = new Waterbender(name, nation === 'Republic City' ? nation : 'Water Tribes', [], []);
            break;
        case 'Nonbender':
            character = new Nonbender(name, nation, [], []);
            break;
        case 'Avatar':
            if (!avatarInstance) {
                avatarInstance = Avatar.getInstance(name, nation, bendingStyle, [], []);
            } else {
                console.error('An Avatar already exists.');
                return; // Optionally handle this case in the UI
            }
            character = avatarInstance;
            break;
    }

    const avatarStateSection = document.getElementById('avatar-state-section');
    if (avatarStateSection) {
        avatarStateSection.style.display = type === "Avatar" ? 'block' : 'none';
    } else {
        console.error('Avatar state section element not found.');
    }

    if (character) {
        DOMHandler.displayCharacter(character, 'character-display');
    }
    
    // After character creation, call functions to handle learning moves
    showOffenseMoves(type as CharacterType);
    showDefenseMoves(type as CharacterType);
  }
  
// Define available moves for each character type
const offenseMovesByType = {
    'Airbender': ['Air Slices', 'Vacuum Sphere', 'Sonic Boom'],
    'Earthbender': ['Rock Bullets', 'Lavabending', 'Seismic Sense'],
    'Firebender': ['Fire Jets', 'Lightning Generation', 'Combustion Blast'],
    'Waterbender': ['Ice Spears', 'Water Whip', 'Bloodbending'],
    'Nonbender': ['Chi Blocking', 'Swordsmanship', 'Electrified Weapons'],
    'Avatar': ['Air Slices', 'Rock Bullets', 'Fire Jets', 'Ice Spears'] // Including all moves
};

const defenseMovesByType = {
    'Airbender': ['Air Shield', 'Flight', 'Spiritual Projection'],
    'Earthbender': ['Earth Wall', 'Metal Armor', 'Sand Cloud'],
    'Firebender': ['Fire Shield', 'Heat Control', 'Lightning Redirection'],
    'Waterbender': ['Healing Waters', 'Spirit Bending', 'Water Shield'],
    'Nonbender': ['Martial Arts', 'Smoke Bombs', 'Shield Use'],
    'Avatar': ['Air Shield', 'Earth Wall', 'Fire Shield', 'Water Shield'] // Including all moves 
};

function showOffenseMoves(characterType: CharacterType) {
    const offenseMoveSelect = document.getElementById('offense-moves') as HTMLSelectElement;
    offenseMoveSelect.innerHTML = ''; // Clear existing options
    const moves = offenseMovesByType[characterType] ?? []; // Correctly indexed with CharacterType

    moves.forEach((move: string) => {
        const option = document.createElement('option');
        option.value = move;
        option.textContent = move;
        offenseMoveSelect.appendChild(option);
    });
}


function showDefenseMoves(characterType: CharacterType) {
    const defenseMoveSelect = document.getElementById('defense-moves') as HTMLSelectElement;
    defenseMoveSelect.innerHTML = ''; // Clear existing options
    const moves = defenseMovesByType[characterType] ?? []; // Correctly indexed with CharacterType

    moves.forEach((move: string) => {
        const option = document.createElement('option');
        option.value = move;
        option.textContent = move;
        defenseMoveSelect.appendChild(option);
    });
}

// Correct the ID for the character type select
document.getElementById('character-type')?.addEventListener('change', (e) => {
    const selectElement = e.target as HTMLSelectElement;
    const characterType = selectElement.value as CharacterType;
    populateNations(characterType);
});

// Correct the ID for the character name input
document.getElementById('create-character-btn')?.addEventListener('click', () => {
    const typeSelect = document.getElementById('character-type') as HTMLSelectElement; // Corrected ID
    const nameInput = document.getElementById('character-name') as HTMLInputElement; // Corrected ID
    const nationSelect = document.getElementById('nation') as HTMLSelectElement;
    let bendingStyle = ""; // Initialize bendingStyle

    // Check if bendingStyleSelect exists and is relevant based on the type selected
    if (typeSelect.value === "Avatar") {
        const bendingStyleSelect = document.getElementById('bending-style-select') as HTMLSelectElement;
        bendingStyle = bendingStyleSelect.value;
    }

    handleCharacterSelection(typeSelect.value, nameInput.value, nationSelect.value, bendingStyle);
});


// Initialize nations for the default character type when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const characterTypeSelect = document.getElementById('character-type-select') as HTMLSelectElement;
    const initialCharacterType = characterTypeSelect.value as CharacterType; // Asserting the type
    populateNations(initialCharacterType);
});