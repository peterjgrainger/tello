import { dialog, DialogState, intent } from 'alexa-app/types';
import test from 'ava';
import { PublishingInformation } from '../publishing-information';
import { Slot } from '../skill-definition/models/slots/slot';
import { interactionModel } from './interaction-model';

const intents = [
        {
            dialog: {} as dialog,
            dialogState: {} as DialogState,
            isDelegatedDialog: () => true,
            name: 'testIntent',
            slots: {'some slot': 'CUSTOM'},
            utterances: [
                'I would like to say hello to the world and {-|name}',
                'Can I say hello to {you|me|them}',
            ],
        } as intent,
    ];

test((t) => {
    const model = interactionModel(intents, PublishingInformation, [{
        name: 'CUSTOM',
        values: [{
            name: {
                value: 'sample',
            },
        }],
    }]);
    t.is(!!model, true);
    t.deepEqual(model.interactionModel.languageModel.intents,
                [{
                    name: 'testIntent',
                    samples: [
                        'I would like to say hello to the world and {name}',
                        'Can I say hello to you',
                        'Can I say hello to me',
                        'Can I say hello to them',
                    ],
                    slots: [{name: 'some slot',
                            type: 'CUSTOM'}],
                }]);

    t.is(model.interactionModel.languageModel.invocationName,
        PublishingInformation.NAME);
    t.deepEqual(model.interactionModel.languageModel.types, [{
                name: 'CUSTOM',
                values: [{
                    name: {
                        value: 'sample',
                    },
                }],
            }]);

});
