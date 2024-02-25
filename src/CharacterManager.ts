import DOMHandler from "./DomHandler";
import Character from "./character/Character";

class CharacterManager {
  private characters: Character[] = [];
  private charactersInDOM = new Map<string, HTMLElement>(); // Track characters currently displayed

  // Add a character to the manager
  public addCharacter(character: Character): void {
    this.characters.push(character);
    this.renderCharacters(); // Ensure characters are rendered upon addition
  }

  // Remove a character by name
  public removeCharacter(name: string): void {
    this.characters = this.characters.filter(character => character.name !== name);
  }

  // Update a character by name
  public updateCharacter(name: string, newCharacterData: Partial<Character>): void {
    const characterIndex = this.characters.findIndex(character => character.name === name);
    if (characterIndex !== -1) {
      const character = this.characters[characterIndex];
      // Update 'nation' if it's part of newCharacterData
      if (newCharacterData.nation !== undefined) {
        character.nation = newCharacterData.nation;
      }
      // Update 'name' if it's part of newCharacterData
      if (newCharacterData.name !== undefined) {
        character.name = newCharacterData.name;
      }
      // Update 'bendingStyle' if it's part of newCharacterData
      if (newCharacterData.bendingStyle !== undefined) {
        character.bendingStyle = newCharacterData.bendingStyle;
      }
      // Update 'offenseMoves' if it's part of newCharacterData
      if (newCharacterData.offenseMoves !== undefined) {
        character.offenseMoves = newCharacterData.offenseMoves;
      }
      // Update 'defenseMoves' if it's part of newCharacterData
      if (newCharacterData.defenseMoves !== undefined) {
        character.defenseMoves = newCharacterData.defenseMoves;
      }
    } else {
      console.warn(`Character with name ${name} not found.`);
    }
  }

  // Render characters to the HTML
  public renderCharacters(): void {
    const container = document.getElementById('characters-container');
    if (!container) {
        console.error('Characters container not found');
        return;
    }

    const fragment = document.createDocumentFragment();
    const newCharactersInDOM = new Map<string, HTMLElement>();

    this.characters.forEach(character => {
      let characterCard = this.charactersInDOM.get(character.id);
      if (!characterCard) {
          // Character card does not exist; create a new one
          characterCard = DOMHandler.createCharacterCard(character);
          fragment.appendChild(characterCard);
      } else {
          // Character card exists; update it
          DOMHandler.updateCharacterCard(characterCard, character);
      }
      newCharactersInDOM.set(character.id, characterCard);
  });
    // Remove characters that are no longer present
    this.charactersInDOM.forEach((card, id) => {
        if (!newCharactersInDOM.has(id)) {
            card.remove();
        }
    });

    container.appendChild(fragment); // Append all new characters in a single operation
    this.charactersInDOM = newCharactersInDOM; // Update tracking map
}
}

export default CharacterManager;
