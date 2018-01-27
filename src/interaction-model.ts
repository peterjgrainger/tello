
export function interactionModel(intents: {[name:string]: any}, PublishingInformation) {
    return {
        interactionModel: {
            languageModel: {
                invocationName: PublishingInformation.APP_NAME,
                types: [],
                intents: Object.keys(intents)
                    .map(key => intents[key])
                    .map(intent => {
                        return {
                            name: intent.name,
                            slots: convertToArray(intent.slots),
                            samples: intent.utterances
                        }
                    })
            }
        }
    }
}

function convertToArray(object) {
    const array = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = {};
            element[key] = object[key];
            array.push(element);
        }
    }

    return array;
}