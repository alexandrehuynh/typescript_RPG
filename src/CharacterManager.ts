class CharacterManager {
  private characters: Character[] = [];

  // Add a character to the manager
  public addCharacter(character: Character): void {
    this.characters.push(character);
  }

  // Remove a character by name
  public removeCharacter(name: string): void {
    this.characters = this.characters.filter(character => character.name !== name);
  }

  // Update a character by name
  public updateCharacter(name: string, newCharacterData: Partial<Character>): void {
    const characterIndex = this.characters.findIndex(character => character.name === name);
    if (characterIndex !== -1) {
      // Update only the properties that are passed in newCharacterData
      this.characters[characterIndex] = { ...this.characters[characterIndex], ...newCharacterData };
    } else {
      console.warn(`Character with name ${name} not found.`);
    }
  }

  // Find a character by name
  public findCharacter(name: string): Character | undefined {
    return this.characters.find(character => character.name === name);
  }

  // List all characters
  public listCharacters(): Character[] {
    return this.characters;
  }
}

// Character base class
class Character {
  constructor(public name: string, public nation: string, public bendingStyle: string) {}
}

export default CharacterManager;
