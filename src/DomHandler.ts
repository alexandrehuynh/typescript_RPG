import Character from './character/Character';


class DOMHandler {
    
    static displayCharacter(character: Character, containerId: string) {
        console.log('Attempting to display character:', character);
        const container = document.getElementById(containerId);
        if (!container) {
              console.error('Container not found for ID:', containerId);
          return; // Exit if container doesn't exist
        }
        // Log to confirm container is found
        console.log(`Found container for ID ${containerId}`, container);
        const characterCard = this.createCharacterCard(character);
        container.innerHTML = ''; // Clear previous content
        container.appendChild(characterCard);
      }


    static createCharacterCard(character: Character): HTMLElement {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <h2>${character.name}</h2>
            <p>Nation: ${character.nation}</p>
            <p>Bending Style: ${character.bendingStyle}</p>
            <p>Abilities: ${character.offenseMoves.map(move => move.name).join(', ')}</p>
            <p>Abilities: ${character.defenseMoves.map(move => move.name).join(', ')}</p>

        `;
        return card;
    }

    static displayCharacters(characters: Character[], containerId: string): void {
        const container = document.getElementById(containerId);
        if (!container) return;

        characters.forEach(character => {
            const card = this.createCharacterCard(character);
            container.appendChild(card);
        });
    }
}

export default DOMHandler;
