import test from 'ava';
import { interactionModel } from './interaction-model';
import { PublishingInformation } from './publishing-information';


const intents = {
        'testIntent': {
            slots: {
                'CUSTOM': 'something'
            },
            name: 'testIntent',
            utterances: [
                'hello'
            ]
        }
    };

test((t) => {
    const model = interactionModel(intents, PublishingInformation)
	t.is(!!model, true);
    t.deepEqual(model.interactionModel.languageModel.intents,
                [{
                    name: 'testIntent',
                    slots: [{
                        'CUSTOM': 'something'
                    }],
                    samples: [
                        'hello'
                    ]
                }]);

    t.is(model.interactionModel.languageModel.invocationName,
        PublishingInformation.APP_NAME)

});

