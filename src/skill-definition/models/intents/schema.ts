export class Schema {
    slots: object;
    utterances: Array<string>;

    constructor( utterances:Array<string> = [], slots:object={}) {
       this.slots = slots;
       this.utterances = utterances; 
    }
}
