export class Schema {
    slots: object;
    utterances: Array<string>;

    constructor(slots:object = {}, utterances:Array<string> = []) {
        this.slots = slots;
        this.utterances = utterances;
    }
}
