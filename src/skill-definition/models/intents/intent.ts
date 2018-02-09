import { Slot } from "../../models/slots/slot";
import { IntentDefinition } from "./intent-definition";

export abstract class Intent {
    utterances : Array<string> = [];
    slots: Array<Slot> = [];

    schema() {
        return {
            utterances: this.utterances,
            slots: this.slots.reduce((acc, value) => {
                acc[value.name] = value.type;
                return acc;
            }, {})
        }
    }
}