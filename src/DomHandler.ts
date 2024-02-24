import Character from './character/Character';


class DOMHandler {
    
    static displayCharacter(character: Character, containerId: string) {
        const container = document.getElementById(containerId);
        if (!container) {
          console.error('Container not found');
          return; // Exit if container doesn't exist
        }
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
