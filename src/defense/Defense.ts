import { v4 as uuidv4 } from 'uuid';

export default class Defense {
  readonly id: string;
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.id = uuidv4();
    this.name = name;
    this.description = description;
  }
}
