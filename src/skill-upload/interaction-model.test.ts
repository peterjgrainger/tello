import test from 'ava';
import { interactionModel } from './interaction-model';
import { PublishingInformation } from '../publishing-information';
import { Slot } from '../skill-definition/models/slots/slot';
import { intent, DialogState, dialog } from 'alexa-app/types';


const intents = [
        {
            dialogState: {} as DialogState,
            isDelegatedDialog: () => true,
            dialog: {} as dialog,
            slots: {'some slot': 'CUSTOM'},
            name: 'testIntent',
            utterances: [
                'I would like to say hello to the world and {-|name}',
                'Can I say hello to {you|me|them}'
            ]
        } as intent
    ];

test((t) => {
    const model = interactionModel(intents, PublishingInformation, [{
        name: 'CUSTOM',
        values: [{
            name: {
                value: 'sample'
            }
        }]
    }])
	t.is(!!model, true);
    t.deepEqual(model.interactionModel.languageModel.intents,
                [{
                    name: 'testIntent',
                    slots: [{name: 'some slot',
                            type: 'CUSTOM'}],
                    samples: [
                        'I would like to say hello to the world and {name}',
                        'Can I say hello to you',
                        'Can I say hello to me',
                        'Can I say hello to them'
                    ]
                }]);

    t.is(model.interactionModel.languageModel.invocationName,
        PublishingInformation.APP_NAME)
    t.deepEqual(model.interactionModel.languageModel.types,[{
                name: 'CUSTOM',
                values: [{
                    name: {
                        value: 'sample'
                    }
                }]
            }])

});

