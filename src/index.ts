import Avatar from './character/Avatar';
import Airbender from './character/Airbender';
import Earthbender from './character/Earthbender';
import Firebender from './character/Firebender';
import Waterbender from './character/Waterbender';
import Nonbender from './character/Nonbender';
import DOMHandler from './DomHandler';

// Placeholder for the single Avatar instance
let avatarInstance: Avatar | null = null;

// Define a type that includes all possible keys for character types
type CharacterType = 'Airbender' | 'Earthbender' | 'Firebender' | 'Waterbender' | 'Nonbender' | 'Avatar';


// Function to populate nations based on character type
function populateNations(characterType: string) {
    const nationSelect = document.getElementById('nation') as HTMLSelectElement;
    nationSelect.innerHTML = ''; // Clear existing options

    const nationsByType = {
        'Airbender': ['Air Temples', 'Republic City'],
        'Earthbender': ['Earth Kingdom', 'Republic City'],
        'Firebender': ['Fire Nation', 'Republic City'],
        'Waterbender': ['Water Tribes', 'Republic City'],
        'Nonbender': ['Any'],
        'Avatar': ['Any']
    };

    (nationsByType[characterType] || []).forEach((nation: string) => {
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

    if (character) {
        DOMHandler.displayCharacter(character, 'character-display');
    }
    
    // After character creation, call functions to handle learning moves
    showOffenseMoves(type);
    showDefenseMoves(type);
  }
  
  // Functions to show move options
  function showOffenseMoves(characterType: string) {
    // Populate offense moves based on characterType
    // ...
  }
  
  function showDefenseMoves(characterType: string) {
    // Populate defense moves based on characterType
    // ...
  }
  
  // Event listener for character type change to update nations
  document.getElementById('character-type-select')?.addEventListener('change', (event) => {
    const selectedType = (event.target as HTMLSelectElement).value as CharacterType;
    populateNations(selectedType);
  });
  
  // Call this function when the page loads to initialize nations for the default character type
  document.addEventListener('DOMContentLoaded', () => {
    const initialCharacterType = (document.getElementById('character-type') as HTMLSelectElement).value;
    populateNations(initialCharacterType);
  });
  

  // Call populateNations initially for the default selected character type
    document.addEventListener('DOMContentLoaded', () => {
    const characterTypeSelect = document.getElementById('character-type-select') as HTMLSelectElement;
    const initialCharacterType = characterTypeSelect.value;
    populateNations(initialCharacterType);

  // Event listener for character creation button click
  document.getElementById('create-character-btn')?.addEventListener('click', () => {
    const typeSelect = document.getElementById('character-type-select') as HTMLSelectElement;
    const nameInput = document.getElementById('character-name-input') as HTMLInputElement;
    const nationSelect = document.getElementById('nation-select') as HTMLSelectElement;
    let bendingStyle = ""; // Initialize bendingStyle

    // Check if bendingStyleSelect exists and is relevant based on the type selected
    if (typeSelect.value === "Avatar") {
        const bendingStyleSelect = document.getElementById('bending-style-select') as HTMLSelectElement;
        bendingStyle = bendingStyleSelect.value;
    }

    handleCharacterSelection(typeSelect.value, nameInput.value, nationSelect.value, bendingStyle);
});

    characterTypeSelect.addEventListener('change', (event) => {
        populateNations((event.target as HTMLSelectElement).value);
    });
});