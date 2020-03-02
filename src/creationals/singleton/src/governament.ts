 
export class Governament {
    officialName: string;
    president: string;
    private static instance: Governament = null;;

    private constructor(data) {
        this.officialName = data.officialName;
        this.president = data.president;
    }

    static getInstance(data?): Governament {
        if (!Governament.instance) {
            Governament.instance = new Governament(data) 
        }

        return Governament.instance;
    }
}