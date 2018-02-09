export class Slot {
    name: string;
    type: string;
    samples: Array<string>
    constructor(name: string, type: string, samples: Array<string>=[]) {
        this.name = name;
        this.type = type;
        this.samples = samples;
    }

    getServerSchema() : {} {
        return this[this.name] = this.type;
    }

    getSlotType() : {name: string, values: Array<{name: {value: string}}>} {
        return {
            name: this.type,
            values: this.samples.map(sample => {
                return {
                    name: {
                        value: sample
                    }
                }
            })
        }
    }

    getInteractionDefinition() {
        return {
            name: this.name,
            type: this.type
        }
    }
}