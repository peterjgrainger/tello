import test from 'ava';
import { getSlotTypesForModel, slotTypes } from './slot-types';

test((t) => {
    t.deepEqual(getSlotTypesForModel(), [{
        name: 'NAME',
        values: [
            {
                name: {
                    value: 'Peter',
                },
            },
            {
                name: {
                    value: 'Paul',
                },
            },
            {
                name: {
                    value: 'John F. Kennedy',
                },
            },
        ],
    }]);
});
