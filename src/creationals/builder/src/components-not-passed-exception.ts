export class ComponentsNotPassedException extends Error {
    message: string;
  
    constructor(message) {
      super(message);
      this.name = "ComponentsNotPassedException";
    }
  }