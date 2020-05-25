export interface IContact {
    email: string;
    name: string;
    phoneNumber: string;
    username: string;
}

export class Contact {
    email: string;
    name: string;
    phoneNumber: string;
    username: string;

    constructor(data: IContact) {
        this.email = data.email;
        this.name = data.name;
        this.phoneNumber = data.phoneNumber;
        this.username = data.username;
    }
}