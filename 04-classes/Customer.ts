export class Customer {
    private x: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        /** przy użyciu poniższych getterów i setterów nazwa pola traci znaczenie.
         * Nazwałem pole "x", a setter "pierwszeImie", a jestem w stanie ustawiać wartość
         * poprzez customer.pierwszeImie*/
        this.x = firstName;
        this._lastName = lastName;
    }

    /** w TypeScript chyba się za bardzo nie używa takich Javovych rzeczy,
     * zwykle pola są publiczne, chyba że koniecznie należy je zablokować z jakiegoś powodu */
    get firstName(): string {
        return this.x;
    }

    set pierwszeImie(value: string) {
        this.x = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}
let marian = new Customer("Marian", "Sowinski")
/** użycie settera */
marian.pierwszeImie = "Zbigniew"

/** użycie getterów */
console.log(`${marian.firstName} ${marian.lastName}`);