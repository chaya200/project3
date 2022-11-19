export class SomeModel {

    public id: number;
    public firstName: string;
    // public lastName: string;

    public constructor(something: SomeModel) {

        this.id = something.id;
        this.firstName = something.firstName;
        // this.lastName = something.lastName;
        
    }
}

