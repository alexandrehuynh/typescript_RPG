import Character from './character/Character';

class DOMHandler {

    static displayCharacter(character: Character, containerId: string): void {
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
            <p>Abilities: ${character.offenseMoves.map(move => move.name).join(', ')} / ${character.defenseMoves.map(move => move.name).join(', ')}</p>
        `;
        return card;
    }

    static displayCharacters(characters: Character[], containerId: string): void {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = ''; // Clear the container before adding updated character list

        characters.forEach(character => {
            const card = this.createCharacterCard(character);
            container.appendChild(card);
        });
    }

    static updateCharacterCard(card: HTMLElement, character: Character): void {
        // Update basic character information with null checks
        const nameElement = card.querySelector('h2');
        const nationElement = card.querySelector('p.nation');
        const bendingStyleElement = card.querySelector('p.bendingStyle');
        const offenseMovesElement = card.querySelector('p.offenseMoves');
        const defenseMovesElement = card.querySelector('p.defenseMoves');

        if (nameElement) nameElement.textContent = character.name;
        if (nationElement) nationElement.textContent = `Nation: ${character.nation}`;
        if (bendingStyleElement) bendingStyleElement.textContent = `Bending Style: ${character.bendingStyle}`;

        // Update offense moves
        if (offenseMovesElement) {
            offenseMovesElement.textContent = `Offense Moves: ${character.offenseMoves.map(move => move.name).join(', ')}`;
        }

        // Update defense moves
        if (defenseMovesElement) {
            defenseMovesElement.textContent = `Defense Moves: ${character.defenseMoves.map(move => move.name).join(', ')}`;
        }
    }
}

export default DOMHandler;
