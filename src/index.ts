import Avatar from './character/Avatar';
import Airbender from './character/Airbender';
import Earthbender from './character/Earthbender';
import Firebender from './character/Firebender';
import Waterbender from './character/Waterbender';
import Nonbender from './character/Nonbender';
import DOMHandler from './DomHandler';
import CharacterManager from './CharacterManager';
import IAttackMechanism from './interfaces/IAttackMechanism';
import { isAttackMechanism } from './TypeGuard';
import { isDefenseMechanism } from './TypeGuard';
import IDefenseMechanism from './interfaces/IDefenseMechanism';
import AirSlices from './offense/Airbending/AirSlices';
import VacuumSphere from './offense/Airbending/VacuumSphere';
import SonicBoom from './offense/Airbending/SonicBoom';
import RockBullets from './offense/Earthbending/RockBullets';
import Lavabending from './offense/Earthbending/Lavabending';
import SeismicSense from './offense/Earthbending/SeismicSense';
import FireJets from './offense/Firebending/FireJets';
import LightingGeneration from './offense/Firebending/LightingGeneration';
import CombustionBlast from './offense/Firebending/CombustionBlast';
import IceSpears from './offense/Waterbending/IceSpears';
import WaterWhip from './offense/Waterbending/WaterWhip';
import Bloodbending from './offense/Waterbending/Bloodbending';
import MechaSuit from './offense/Nonbending/MechaSuit';
import SwordsAndBoomerang from './offense/Nonbending/SwordsAndBoomy';
import ElectrifiedGloves from './offense/Nonbending/ElectrifiedGloves';
import AvatarStateOffense from './offense/Avatar/AvatarState';
import AirShield from './defense/Airbending/AirShield';
import Flight from './defense/Airbending/Flight';
import SpiritualProjections from './defense/Airbending/SpiritualProjections';
import EarthWall from './defense/Earthbending/EarthWall';
import MetalArmor from './defense/Earthbending/MetalArmor';
import SandCloud from './defense/Earthbending/SandCloud';
import FireSheild from './defense/Firebending/FireSheild';
import HeatControl from './defense/Firebending/HeatControl';
import LightningRedirection from './defense/Firebending/LightningRedirection';
import HealingWaters from './defense/Waterbending/HealingWaters';
import SpiritBending from './defense/Waterbending/SpiritBending';
import WaterShield from './defense/Waterbending/WaterShield';
import ChiBlocking from './defense/Nonbending/ChiBlocking';
import Backup from './defense/Nonbending/Backup';
import Distractions from './defense/Nonbending/Distractions';
import AvatarStateDefense from './defense/Avatar/AvatarState';

// Define CharacterBending outside of any function
type CharacterBending = 'Airbender' | 'Earthbender' | 'Firebender' | 'Waterbender' | 'Nonbender' | 'Avatar';
// type MoveInstances = {
//     [key: string]: IAttackMechanism | IDefenseMechanism;
// };

let avatarInstance: Avatar | null = null;
const characterManager = new CharacterManager();

// Define available moves for each character bending
const offenseMovesByBending = {
    'Airbender': ['Air Slices', 'Vacuum Sphere', 'Sonic Boom'],
    'Earthbender': ['Rock Bullets', 'Lavabending', 'Seismic Sense'],
    'Firebender': ['Fire Jets', 'Lightning Generation', 'Combustion Blast'],
    'Waterbender': ['Ice Spears', 'Water Whip', 'Bloodbending'],
    'Nonbender': ['Electrified Gloves', 'Mecha Suit', 'Swords And Boomerang'],
    'Avatar': ['Air Slices', 'Vacuum Sphere', 'Sonic Boom', 'Rock Bullets', 'Lavabending', 'Seismic Sense', 'Fire Jets', 
                'Lightning Generation', 'Combustion Blast', 'Ice Spears', 'Water Whip', 'Bloodbending'] // Including all moves
};

const defenseMovesByBending = {
    'Airbender': ['Air Shield', 'Flight', 'Spiritual Projection'],
    'Earthbender': ['Earth Wall', 'Metal Armor', 'Sand Cloud'],
    'Firebender': ['Fire Shield', 'Heat Control', 'Lightning Redirection'],
    'Waterbender': ['Healing Waters', 'Spirit Bending', 'Water Shield'],
    'Nonbender': ['Chi Blocking', 'Back Up', 'Distractions'],
    'Avatar': ['Air Shield', 'Flight', 'Spiritual Projection', 'Earth Wall', 'Metal Armor', 'Sand Cloud', 'Fire Shield', 
            'Heat Control', 'Lightning Redirection', 'Healing Waters', 'Spirit Bending', 'Water Shield'] // Including all moves 
};

const allMoves: Record<string, IAttackMechanism | IDefenseMechanism> = {    
    'Air Slices': new AirSlices(),
    'Vacuum Sphere': new VacuumSphere(),
    'Sonic Boom': new SonicBoom(),
    'Rock Bullets': new RockBullets(),
    'Lavabending': new Lavabending(), 
    'Seismic Sense': new SeismicSense(), 
    'Fire Jets': new FireJets(),
    'Lightning Generation': new LightingGeneration(),
    'Combustion Blast': new CombustionBlast(), 
    'Ice Spears': new IceSpears(), 
    'Water Whip': new WaterWhip(), 
    'Bloodbending': new Bloodbending(),
    'Air Shield': new AirShield(), 
    'Flight': new Flight(), 
    'Spiritual Projection': new SpiritualProjections(), 
    'Earth Wall': new EarthWall(), 
    'Metal Armor': new MetalArmor(), 
    'Sand Cloud': new SandCloud(), 
    'Fire Shield': new FireSheild(), 
    'Heat Control': new HeatControl(), 
    'Lightning Redirection': new LightningRedirection(), 
    'Healing Waters': new HealingWaters(), 
    'Spirit Bending': new SpiritBending(), 
    'Water Shield': new WaterShield(),
    'Mecha Suit': new MechaSuit(),
    'Swords And Boomerang': new SwordsAndBoomerang(), 
    'Electrified Gloves': new ElectrifiedGloves(),
    'Chi Blocking': new ChiBlocking(), 
    'Backup': new Backup(),
    'Distractions': new Distractions(), 
    'Avatar State Defense': new AvatarStateDefense(),
    'Avatar State Offense': new AvatarStateOffense() 
};

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
function handleCharacterSelection(
    name: string,
    nation: string,
    bendingStyle: CharacterBending,
    offenseMoves: IAttackMechanism[],
    defenseMoves: IDefenseMechanism[]
  ) {
    console.log(`Handling character selection - Name: ${name}, Nation: ${nation}, Bending Style: ${bendingStyle}`);
    let character = null;

    switch (bendingStyle) {
        case 'Airbender':
          character = new Airbender(name, nation, offenseMoves, defenseMoves);
          break;
        case 'Earthbender':
          character = new Earthbender(name, nation, offenseMoves, defenseMoves);
          break;
        case 'Firebender':
          character = new Firebender(name, nation, offenseMoves, defenseMoves);
          break;
        case 'Waterbender':
          character = new Waterbender(name, nation, offenseMoves, defenseMoves);
          break;
        case 'Nonbender':
          character = new Nonbender(name, nation, offenseMoves, defenseMoves);
          break;
        case 'Avatar':
          if (!avatarInstance) {
            avatarInstance = Avatar.getInstance(name, nation, bendingStyle, offenseMoves, defenseMoves);
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
        // console.log('Updating UI with the created character');
        DOMHandler.displayCharacter(character, 'character-display');
        // console.log('UI should be updated now');
    }

    return character; // Ensure this function returns the created character or null
}

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
// Utility function to get move instances based on requirements
function getMovesByName(moveNames: string[]): (IAttackMechanism | IDefenseMechanism)[] {
    return moveNames.map(name => allMoves[name]);
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

// Function to get the selected moves from the select elements
// function getSelectedMoves<T extends IAttackMechanism | IDefenseMechanism>(
//     selectElementId: string,
//     movesMap: Record<string, T>
//   ): T[] {
//     const selectElement = document.getElementById(selectElementId) as HTMLSelectElement;
//     return Array.from(selectElement.selectedOptions).map(option => movesMap[option.value]) as T[];
//   }
  

// DOM for Character Bending
document.getElementById('character-bending')?.addEventListener('change', (e) => {
    const selectElement = e.target as HTMLSelectElement;
    const characterBending = selectElement.value as CharacterBending;
    populateNations(characterBending);
    showOffenseMoves(characterBending);
    showDefenseMoves(characterBending);
});

document.getElementById('create-character-btn')?.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    console.log('Create character button clicked');

    // Retrieve form values
    const nameInput = document.getElementById('character-name') as HTMLInputElement;
    const nationSelect = document.getElementById('nation') as HTMLSelectElement;
    const bendingSelect = document.getElementById('character-bending') as HTMLSelectElement;

    // Retrieve selected move names from the dropdowns
    const offenseMoveNames = Array.from((document.getElementById('offense-moves') as HTMLSelectElement).selectedOptions).map(option => option.value);
    const defenseMoveNames = Array.from((document.getElementById('defense-moves') as HTMLSelectElement).selectedOptions).map(option => option.value);

    // Convert names to move instances
    const allSelectedMoves = getMovesByName([...offenseMoveNames, ...defenseMoveNames]);

    // Separate moves into offense and defense using type guards
    const selectedOffenseMoves = allSelectedMoves.filter(isAttackMechanism);
    const selectedDefenseMoves = allSelectedMoves.filter(isDefenseMechanism);

    const bendingStyle = bendingSelect.value as CharacterBending;

    // Create the character with the selected moves
    const character = handleCharacterSelection(nameInput.value, nationSelect.value, bendingStyle, selectedOffenseMoves, selectedDefenseMoves);

    if (character) {
        characterManager.addCharacter(character);
        console.log('Character created:', character);
        // Optionally update the UI here to show the created character
    } else {
        console.error("Character creation failed.");
    }
});


// DOM for Charater Form
document.addEventListener('DOMContentLoaded', () => {
    const characterForm = document.getElementById('character-form') as HTMLFormElement;
    const characterBendingSelect = document.getElementById('character-bending') as HTMLSelectElement;
    const offenseMoveSelect = document.getElementById('offense-moves') as HTMLSelectElement;
    const defenseMoveSelect = document.getElementById('defense-moves') as HTMLSelectElement;
    const characterManager = new CharacterManager();
    
    if (!characterBendingSelect || !characterForm || !offenseMoveSelect || !defenseMoveSelect) {
        console.error("One or more required elements are missing from the document.");
        return;
    }

    // Function to initialize move selection based on character bending
    function initializeMoveSelection(characterBending: CharacterBending) {
        showOffenseMoves(characterBending);
        showDefenseMoves(characterBending);
    }

    // Set initial nations and moves based on default selected bending style
    const initialCharacterBending = characterBendingSelect.value as CharacterBending;
    populateNations(initialCharacterBending);
    initializeMoveSelection(initialCharacterBending);

    // Change event for character bending select
    characterBendingSelect.addEventListener('change', (e) => {
        const bendingStyle = (e.target as HTMLSelectElement).value as CharacterBending;
        populateNations(bendingStyle);
        initializeMoveSelection(bendingStyle);
    });

    // Form submission event
    // Form submission event
    characterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Retrieve values from form
    const name = (document.getElementById('character-name') as HTMLInputElement).value;
    const nation = (document.getElementById('nation') as HTMLSelectElement).value;
    const bendingStyle = (document.getElementById('character-bending') as HTMLSelectElement).value as CharacterBending;

    // Retrieve selected move names
    const offenseMoveNames = Array.from(offenseMoveSelect.selectedOptions).map(o => o.value);
    const defenseMoveNames = Array.from(defenseMoveSelect.selectedOptions).map(o => o.value);

    // Convert selected move names to move instances using the getMovesByName function
    const selectedOffenseMoves = getMovesByName(offenseMoveNames) as IAttackMechanism[]; // Assume this returns instances of IAttackMechanism
    const selectedDefenseMoves = getMovesByName(defenseMoveNames) as IDefenseMechanism[]; // Assume this returns instances of IDefenseMechanism

    // Create the character
    const character = handleCharacterSelection(name, nation, bendingStyle, selectedOffenseMoves, selectedDefenseMoves);
    if (character) {
        console.log('Character created successfully:', character);
        characterManager.addCharacter(character);
        console.log('Character created:', character);
        console.log('All characters:', characterManager.listCharacters());
    } else {
        console.error("Character creation failed.");
    }
});

});

// DOM after page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the character bending select element
    const characterBendingSelect = document.getElementById('character-bending') as HTMLSelectElement;
    
    // Check if the select element exists
    if (!characterBendingSelect) {
      console.error('Character Bending select element not found');
      return;
    }
  
    // Get the initial character bending value
    const initialCharacterBending = characterBendingSelect.value as CharacterBending;
    
    // Populate nations and moves based on the initial character bending value
    populateNations(initialCharacterBending);
    showOffenseMoves(initialCharacterBending);
    showDefenseMoves(initialCharacterBending);
  
    // Change event for character bending select
    characterBendingSelect.addEventListener('change', (e) => {
      const selectedBending = (e.target as HTMLSelectElement).value as CharacterBending;
      populateNations(selectedBending);
      showOffenseMoves(selectedBending);
      showDefenseMoves(selectedBending);
    });
  });
  

